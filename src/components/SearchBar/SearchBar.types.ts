import { LinkType } from '../../types/types';

export type SearchBarProps = {
  links: LinkType[];
  onUpdateLinks: (filteredLinks: LinkType[]) => void;
};
