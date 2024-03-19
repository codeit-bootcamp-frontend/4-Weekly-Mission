//server component
import FolderList from '@/components/folder/FolderList';
import GnbProfile from '@/components/gnb/GnbProfile';

import Content from '@/components/folder/Content';
import Gnb from '@/components/gnb/Gnb';
import AddLink from '@/components/addLink/AddLink';
import Footer from '@/components/footer/Footer';

const FolderPage = () => {
  return (
    <>
      <Gnb isFixed={false}><GnbProfile/></Gnb>
      <AddLink />
      <Content>
        <FolderList />
      </Content>
      <Footer />
    </>
  )
}

export default FolderPage
