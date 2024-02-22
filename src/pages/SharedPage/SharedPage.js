import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import SharedHeaderContent from 'components/Header/SharedHeaderContent';
import CardList from 'components/Main/CardList';
import Main from 'components/Main/Main';
import SearchBar from 'components/Main/SearchBar';

// import styles from 'pages/SharedPage/SharedPage.module.css';

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
