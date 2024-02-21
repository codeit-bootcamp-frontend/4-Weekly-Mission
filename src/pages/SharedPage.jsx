import { useFetchShared } from '../hooks/useFetchShared';

import Gnb from '../components/Gnb';
import Avatar from '../Avatar';
import SharedFolder from '../SharedFolder';
import Footer from '../components/Footer';

const SharedPage = () => {
  const sharedFolder = useFetchShared();
  
  return (
    <>
      <Gnb className='gnb_ly' isFixed={true}/>
      <Avatar sharedFolder={sharedFolder}/>
      <SharedFolder sharedFolder={sharedFolder}/>
      <Footer/>
    </>
  )
}

export default SharedPage;