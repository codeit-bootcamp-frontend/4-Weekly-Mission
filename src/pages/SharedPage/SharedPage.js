import './SharedPage.module.css';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import SharedHeaderContent from '../../components/Header/SharedHeaderContent';
import SearchBar from '../../components/Main/SearchBar';
import CardList from '../../components/Main/CardList';

function Shared() {
  return (
    <div>
      <Header>
        <SharedHeaderContent />
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
