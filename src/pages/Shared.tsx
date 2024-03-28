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
  interface FolderDesc {
    id: number;
    created_at: string;
    updated_at: null;
    url: string;
    title: string;
    description: string;
    image_source: string;
    folder_id: number;
  }

  interface FolderIdData {
    data: FolderDesc[];
  }

  const [filterData, setFilterData] = useState<FolderIdData | null>(null);
  const [folderId, setFolderId] = useState('');
  const [viewData, setViewData] = useState<string | null>('');

  return (
    <>
      <SharedNav />
      <Profile />
      <div className={styles.main_wrapper}>
        <LinkSearchInput
          setViewSearchData={setViewSearchData}
          searchData={searchData}
          setSearchData={setSearchData}
          setFilterData={setFilterData}
          filterData={filterData}
          folderId={folderId}
          setViewData={setViewData}
        />
        <SharePageFolderList />
      </div>
      <Footer />
    </>
  );
}

export default Shared;
