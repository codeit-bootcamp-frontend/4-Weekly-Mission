import { getFolderList } from '@/apis/api';

//server component
import GnbProfile from '@/components/gnb/GnbProfile';
import FolderList from '@/components/folder/FolderList';

import Gnb from '@/components/gnb/Gnb';
import AddLink from '@/components/addLink/AddLink';
import Footer from '@/components/footer/Footer';
import SearchBar from '@/components/searchBar/SearchBar';

import '@/components/folder/Content.css'

const getFolderListData = async () => {
  try {
    const { data } = await getFolderList();

    return data;
  } catch {
    throw new Error('error');
  }
}

const FolderLayout = async ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  const data = await getFolderListData();

  return (
    <>
      <Gnb isFixed={false}><GnbProfile/></Gnb>
      <AddLink />
      <div className='container-folder'>
        <SearchBar />
        <FolderList folderListData={data}/>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default FolderLayout