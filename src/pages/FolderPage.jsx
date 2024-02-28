import AddLink from '../components/AddLink';
import NavBar from '../components/NavBar/NavBar';
import SearchBar from '../components/SearchBar';
import '../styles/global.css';
import Styles from '../styles/FolderPage.module.css';
import Footer from '../components/Footer';
import Card from '../components/Card';
import FolderList from '../components/FolderList';

const FolderPage = () => {
  return (
    <div className={Styles.Folder}>
      <div className={Styles.header}>
        <NavBar />
        <AddLink />
      </div>
      <div>
        <SearchBar />
        <FolderList />
        <Card />
      </div>
      <div></div>
      <Footer />
    </div>
  );
};

export default FolderPage;
