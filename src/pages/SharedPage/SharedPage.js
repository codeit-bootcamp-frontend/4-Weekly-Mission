import classNames from 'classnames';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import SharedHeaderContent from 'components/Header/SharedHeaderContent';
import CardList from 'components/Main/CardList';
import Main from 'components/Main/Main';
import SearchBar from 'components/Main/SearchBar';

// import styles from 'pages/SharedPage/SharedPage.module.css';

function Shared() {
  const containerClasses = classNames('min-height-100vh');

  return (
    <div>
      <div className={containerClasses}>
        <Header>
          <SharedHeaderContent />
        </Header>
        <Main>
          <SearchBar />
          <CardList />
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default Shared;
