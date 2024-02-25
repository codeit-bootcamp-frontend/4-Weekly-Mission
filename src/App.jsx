import { Route, Routes } from 'react-router-dom';

import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import ModalEdit from './components/modals/ModalEdit';
import ModalAdd from './components/modals/ModalAdd';
import ModalDeleteFolder from './components/modals/ModalDeleteFolder';
import ModalDeleteLink from './components/modals/ModalDeleteLink';
import ModalShare from './components/modals/ModalShare';

const App = () => {
  return (
    <Routes>
      <Route path="/shared" element={<SharedPage />} />
      <Route path="/folder" element={<FolderPage />} />
      {/* <Route path="/" element={<ModalEdit title="폴더 이름 변경"/>} /> */}
      {/* <Route path='/' element={<ModalAdd title='폴더 추가'/>}/> */}
      {/* <Route path='/' element={<ModalDeleteFolder title='폴더 삭제'/>}/> */}
      {/* <Route path='/' element={<ModalDeleteLink title='링크 삭제'/>}/> */}
      <Route path='/' element={<ModalShare title='폴더 공유'/>}/>
    </Routes>
  )
}

export default App;
