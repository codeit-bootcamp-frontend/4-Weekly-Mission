import Footer from '../components/Footer';
import Header from '../components/Header';
import FolderInfo from '../components/FolderInfo';

function Folder() {
  return (
    <div>
      <Header />

      <FolderInfo />

      {/* <FolderContent>
        <SearchBar />
        <CardList />
      </FolderContent> */}

      <Footer />
    </div>
  );
}

export default Folder;
