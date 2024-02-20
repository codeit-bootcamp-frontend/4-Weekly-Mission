import './FolderPage.css';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/Main/SearchBar';
import CardList from '../../components/Main/CardList';
import FolderHeaderContent from '../../components/Header/FolderHeaderContent';

function Shared() {
  return (
    <div>
      <Header>
        <FolderHeaderContent />
      </Header>
      <Main>
        <SearchBar />
        <CardList />
      </Main>
      <Footer />
    </div>
  );
}

export default Shared;
