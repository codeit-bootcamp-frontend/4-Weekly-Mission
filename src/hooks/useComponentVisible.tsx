import React, { createContext, useContext, useState } from 'react';
import { HookProps } from '../consts/type';
interface FooterVisibilityType {
  isFooterVisible: boolean;
  setFooterVisibility: (isVisible: boolean) => void;
}

const FooterVisibilityContext = createContext<FooterVisibilityType>({
  isFooterVisible: true,
  setFooterVisibility: () => {},
});

export const useFooterVisibility = () => {
  const context = useContext(FooterVisibilityContext);
  return context;
};

export const FooterVisibility: React.FC<HookProps> = ({ children }) => {
  const [isFooterVisible, setFooterVisibility] = useState(true);

  return (
    <FooterVisibilityContext.Provider value={{ isFooterVisible, setFooterVisibility }}>
      {children}
    </FooterVisibilityContext.Provider>
  );
};

interface GnbVisibilityType {
  isGnbVisible: boolean;
  setGnbVisibility: (isVisible: boolean) => void;
}

const GnbVisibilityContext = createContext<GnbVisibilityType>({
  isGnbVisible: true,
  setGnbVisibility: () => {},
});

export const useGnbVisibility = () => {
  const context = useContext(GnbVisibilityContext);
  return context;
};

export const GnbVisibility: React.FC<HookProps> = ({ children }) => {
  const [isGnbVisible, setGnbVisibility] = useState(true);

  return (
    <GnbVisibilityContext.Provider value={{ isGnbVisible, setGnbVisibility }}>{children}</GnbVisibilityContext.Provider>
  );
};
