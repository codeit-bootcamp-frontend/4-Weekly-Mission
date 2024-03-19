import Content from './Content';
import Gnb from '@/components/gnb/Gnb';
import AddLink from '@/components/addLink/AddLink';
import Footer from '@/components/footer/Footer';

const FolderPage = () => {
  return (
    <>
      <Gnb isFixed={false}/>
      <AddLink />
      <Content />
      <Footer />
    </>
  )
}

export default FolderPage
