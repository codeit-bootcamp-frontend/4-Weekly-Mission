import './FolderPage.css';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/Main/SearchBar';
import CardList from '../../components/Main/CardList';
import FolderHeaderContent from '../../components/Header/FolderHeaderContent';
import SortingButtonList from '../../components/Main/SortingButtonList';
import AddFolderButton from '../../components/Common/AddFolderButton';

function Folder() {
  return (
    <div>
      <Header>
        <FolderHeaderContent />
      </Header>
      <Main>
        <SearchBar />
        <SortingButtonList />
        <AddFolderButton />
        <CardList />
      </Main>
      <Footer />
    </div>
  );
}

export default Folder;
