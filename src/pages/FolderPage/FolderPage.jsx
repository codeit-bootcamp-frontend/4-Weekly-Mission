import FolderList from '../../components/FolderList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LinkAddBar from './components/LinkAddBar';
import { USER_URL } from '../../constants/urls';
function FolderPage() {
  return (
    <>
      <Header url={USER_URL} />
      <LinkAddBar />
      <FolderList />
      <Footer />
    </>
  );
}
export default FolderPage;
