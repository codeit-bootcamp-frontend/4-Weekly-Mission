import { LinkType, UserFolderType } from '../../types/types';

export type CardsProps = {
  links: LinkType[];
  bookmark?: boolean;
  popover?: boolean;
  folders?: UserFolderType[];
};
