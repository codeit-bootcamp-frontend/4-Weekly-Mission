//server component
import GnbProfile from '@/components/gnb/GnbProfile';
import FolderList from '@/components/folder/FolderList';

import Gnb from '@/components/gnb/Gnb';
import AddLink from '@/components/addLink/AddLink';
import Footer from '@/components/footer/Footer';
import SearchBar from '@/components/searchBar/SearchBar';

import '@/components/folder/Content.css'

const FolderLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Gnb isFixed={false}><GnbProfile/></Gnb>
      <AddLink />
      <div className='container-folder'>
        <SearchBar />
        <div className='container-folder-and-cards'>
          <FolderList />
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FolderLayout