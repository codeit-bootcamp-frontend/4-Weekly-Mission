import FolderNav from "../components/header/FolderNav";

function Folder() {
  const userDataUrl = "https://bootcamp-api.codeit.kr/api/users/1";
  return (
    <>
      <FolderNav userDataUrl={userDataUrl} />
    </>
  );
}

export default Folder;
