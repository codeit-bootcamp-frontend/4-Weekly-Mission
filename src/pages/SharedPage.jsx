import { useFetchShared } from '../hooks/useFetchShared';

import Gnb from '../components/Gnb';
import Header from '../Header';
import SharedFolder from '../SharedFolder';
import Footer from '../components/Footer';

const SharedPage = () => {
  const folders = useFetchShared();
  
  return (
    <>
      <Gnb className='gnb_ly gnb-container_sticky'/>
      <Header folders={folders}/>
      <SharedFolder folders={folders}/>
      <Footer/>
    </>
  )
}

export default SharedPage;