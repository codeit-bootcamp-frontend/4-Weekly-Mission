import { createContext, useState } from 'react';

type FooterContextType = {
  isFooterVisible: boolean;
  updateFooterVisible: (visible: boolean) => void;
};

export const FooterContext = createContext<FooterContextType>({
  isFooterVisible: false,
  updateFooterVisible: () => {
    return;
  }
});

export const FooterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const updateFooterVisible = (visible: boolean) => {
    setIsFooterVisible(visible);
  };

  return <FooterContext.Provider value={{ isFooterVisible, updateFooterVisible }}>{children}</FooterContext.Provider>;
};
