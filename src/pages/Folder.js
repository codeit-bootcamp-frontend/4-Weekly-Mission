import FolderNav from "../components/header/FolderNav";
import AddLink from "../components/header/AddLink";
import Footer from "../components/footer/Footer";
function Folder() {
  const userDataUrl = "https://bootcamp-api.codeit.kr/api/users/1";
  return (
    <>
      <FolderNav userDataUrl={userDataUrl} />
      <AddLink />
      <Footer />
    </>
  );
}

export default Folder;
