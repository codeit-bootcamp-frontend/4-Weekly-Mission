import Gnb from '../components/Gnb';
import AddLink from '../AddLink';
import Folder from '../Folder';
import Footer from '../components/Footer';

const FolderPage = () => {
  return (
    <>
      <Gnb className='gnb_ly' isFixed={false}/>
      <AddLink />
      <Folder />
      <Footer/>
    </>
  )
}

export default FolderPage;