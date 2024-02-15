import '../styles/Folder.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FolderInfo from '../components/FolderInfo';
import FolderContent from '../components/FolderContent';

function Folder() {
  return (
    <div>
      <Header />

      <FolderInfo />
      <FolderContent />

      <Footer />
    </div>
  );
}

export default Folder;
