import Gnb from '../components/Gnb';
import Header from '../Header';
import Folder from '../Folder';
import Footer from '../components/Footer';

const FolderPage = () => {
  return (
    <>
      <Gnb className='gnb_ly'/>
      <Header />
      <Folder />
      <Footer/>
    </>
  )
}

export default FolderPage;