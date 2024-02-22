import FolderNav from '../components/header/FolderNav';
import AddLink from '../components/header/AddLink';
import Footer from '../components/footer/Footer';
import FolderPageMain from '../components/main/FolderPageMain';
function Folder() {
  const userDataUrl = 'https://bootcamp-api.codeit.kr/api/users/1';
  return (
    <>
      <FolderNav userDataUrl={userDataUrl} />
      <AddLink />
      <FolderPageMain />
      <Footer />
    </>
  );
}

export default Folder;
