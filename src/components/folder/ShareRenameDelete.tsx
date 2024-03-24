import DeleteButton from "./DeleteButton";
import RenameButton from "./RenameButton";
import ShareButton from "./ShareButton";

function ShareRenameDelete({
  folderName,
  folderId,
}: {
  folderName: string;
  folderId: number;
}) {
  return (
    <div className="share-rename-delete">
      <ShareButton folderName={folderName} folderId={folderId} />
      <RenameButton />
      <DeleteButton folderName={folderName} />
    </div>
  );
}
export default ShareRenameDelete;
