import classNames from 'classnames';
import styles from './FolderPage.module.css';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/Main/SearchBar';
import CardList from '../../components/Main/CardList';
import FolderHeaderContent from '../../components/Header/FolderHeaderContent';
import FloatingAddFolderButton from '../../components/Common/FlaotingAddFolderButton';
import SortingButtonList from '../../components/Main/SortingButtonList';

function Folder() {
  const floatingAddFolderButtonClasses = classNames(styles['floating-add-folder-button'], 'position-fixed', 'z-top');

  return (
    <div>
      <Header>
        <FolderHeaderContent />
      </Header>
      <Main>
        <SearchBar />
        <SortingButtonList />
        <CardList />
        <FloatingAddFolderButton className={floatingAddFolderButtonClasses} />
      </Main>
      <Footer />
    </div>
  );
}

export default Folder;
