import useFetchData from '../hooks/useFetchData';
import Nav from '../components/Nav';
import AddLink from '../components/AddLink';
import FolderDetails from '../components/FolderDetails';
import Footer from '../components/Footer';
export default function Folder() {
  const currentUserData = useFetchData('user', 1);
  return (
    <>
      <Nav currentUserData={currentUserData} />
      <AddLink />
      <FolderDetails />

      <Footer />
    </>
  );
}
