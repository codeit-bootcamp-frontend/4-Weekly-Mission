import SharedNav from 'components/SharedPage/header/SharedNav/SharedNav';
import Profile from 'components/SharedPage/header/Profile/Profile';
import LinkSearchInput from 'components/SharedPage/main/LinkSearchInput/LinkSearchInput';
import SharePageFolderList from 'components/SharedPage/main/SharePageFolderList/SharePageFolderList';
import Footer from '../components/footer/Footer';
import styles from './Shared.module.css';
import { useState } from 'react';
function Shared() {
  const [viewSearchData, setViewSearchData] = useState<boolean | null>(false);
  const [searchData, setSearchData] = useState<string | null>('');

  return (
    <>
      <SharedNav />
      <Profile />
      <div className={styles.main_wrapper}>
        <LinkSearchInput
          setViewSearchData={setViewSearchData}
          searchData={searchData}
          setSearchData={setSearchData}
        />
        <SharePageFolderList />
      </div>
      <Footer />
    </>
  );
}

export default Shared;
