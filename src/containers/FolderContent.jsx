import FolderList from "../components/FolderList";
import AddFolderButton from "../components/AddFolderButton";
import FolderActions from "../components/FolderActions";
import CommonContent from "../components/common/CommonContent";

function FolderContent() {
  const additionalContent = (
    <div>
      <div>
        <FolderList />
        <AddFolderButton />
      </div>
      <div>
        <span>유용한 글</span>
        <FolderActions />
      </div>
    </div>
  );
  return <CommonContent additionalContent={additionalContent} />;
}

export default FolderContent;
