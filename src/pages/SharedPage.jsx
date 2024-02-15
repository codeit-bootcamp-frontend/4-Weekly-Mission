import Gnb from '../components/Gnb';
import Header from '../Header';
import SharedFolder from '../SharedFolder';
import Footer from '../components/Footer';

const SharedPage = () => {
  return (
    <>
      <Gnb className='gnb_ly gnb-container_sticky'/>
      <Header />
      <SharedFolder />
      <Footer/>
    </>
  )
}

export default SharedPage;