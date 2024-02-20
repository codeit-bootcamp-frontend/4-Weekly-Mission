import classNames from 'classnames';
import styles from './FolderPage.module.css';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/Main/SearchBar';
import CardList from '../../components/Main/CardList';
import FolderHeaderContent from '../../components/Header/FolderHeaderContent';
import SortingButtonList from '../../components/Main/SortingButtonList';
import AddFolderButton from '../../components/Common/AddFolderButton';

function Folder() {
  const sortingSectionClasses = classNames(styles['sorting-section'], 'flex-row');
  const addFolderButtonClasses = classNames(styles['add-folder-button']);

  return (
    <div>
      <Header>
        <FolderHeaderContent />
      </Header>
      <Main>
        <SearchBar />
        <div className={sortingSectionClasses}>
          <SortingButtonList />
          <AddFolderButton className={addFolderButtonClasses} />
        </div>
        <CardList />
      </Main>
      <Footer />
    </div>
  );
}

export default Folder;
