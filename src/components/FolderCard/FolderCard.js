import ReadFolderCard from "./ReadFolderCard";

function FolderCard({ folderLinks }) {
  const links = folderLinks || [];

  return <ReadFolderCard links={links} />;
}

export default FolderCard;
