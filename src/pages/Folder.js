import FolderNav from "../components/header/FolderNav";
import AddLink from "../components/header/AddLink";
function Folder() {
  const userDataUrl = "https://bootcamp-api.codeit.kr/api/users/1";
  return (
    <>
      <FolderNav userDataUrl={userDataUrl} />
      <AddLink />
    </>
  );
}

export default Folder;
