import DeleteButton from "./DeleteButton";
import RenameButton from "./RenameButton";
import ShareButton from "./ShareButton";

function ShareRenameDelete() {
  return (
    <div className="share-rename-delete">
      <ShareButton />
      <RenameButton />
      <DeleteButton />
    </div>
  );
}
export default ShareRenameDelete;
