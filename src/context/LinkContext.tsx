import { createContext, useState } from 'react';
import { LinkType } from '../types/types';

type LinkContextType = {
  links: LinkType[];
  updateLinks: (newLinks: LinkType[]) => void;
};

export const LinkContext = createContext<LinkContextType>({
  links: [],
  updateLinks: () => {
    return;
  }
});

export const LinkContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [links, setLinks] = useState<LinkType[]>([]);

  const updateLinks = (newLinks: LinkType[]) => {
    setLinks(newLinks);
  };

  return <LinkContext.Provider value={{ links, updateLinks }}>{children}</LinkContext.Provider>;
};
