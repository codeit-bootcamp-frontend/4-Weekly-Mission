export default interface SharedMainProps {
  ownerProfile: FolderData;
  isFocus: boolean;
  closeButtonRef: React.RefObject<HTMLDivElement>;
  handleCloseClick: () => void;
  inputValue: string;
  filterdItem: LinksData[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputClick: () => void;
}
