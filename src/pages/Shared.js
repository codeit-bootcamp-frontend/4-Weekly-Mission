import SharedNav from 'components/SharedPage/header/SharedNav/SharedNav';
import Profile from 'components/SharedPage/header/Profile/Profile';
import LinkSearchInput from 'components/SharedPage/main/LinkSearchInput/LinkSearchInput';
import SharePageFolderList from 'components/SharedPage/main/SharePageFolderList/SharePageFolderList';
import Footer from '../components/footer/Footer';
import styles from './Shared.module.css';
function Shared() {

  return (
    <>
      <SharedNav />
      <Profile />
      <div className={styles.main_wrapper}>
        <LinkSearchInput />
        <SharePageFolderList />
      </div>
      <Footer />
    </>
  );
}

export default Shared;
