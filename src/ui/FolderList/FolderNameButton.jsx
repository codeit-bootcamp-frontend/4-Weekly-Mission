import { FolderButton } from "./FolderListCss";

export const FolderNameButton = ({ name, onClick }) => {
  return (
    <FolderButton onClick={onClick}>{name}</FolderButton>
  );
}


