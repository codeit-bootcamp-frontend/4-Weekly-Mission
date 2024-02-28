import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Privacy from './components/Privacy';
import Faq from './components/Faq';
import Share from './components/Share';
import Folder from './components/Folder';
import AddModal from './components/modal/AddModal';
import EditModal from './components/modal/EditModal';
import FolderAddModal from './components/modal/FolderAddModal';
import FolderDeleteModal from './components/modal/FolderDeleteModal';
import LinkDeleteModal from './components/modal/LinkDeleteModal';
import ShareModal from './components/modal/ShareModal';

// 메인, 로그인, 회원가입 창을 다 사용할 수 있게 하기 위해
function App() {
  //모달 관련
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal} style={{
        background: '#fff',
        position: 'absolute',
        width : '100px',
        height : '30px',
        zIndex: 3
      }}>여는버튼</button>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Folder/>}></Route>
          <Route path='/privacy' element={<Privacy/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/share' element={<Share/>}></Route>
          <Route path='/folder' element={<Folder/>}></Route>
          <Route path='/addmodal' element={<AddModal isOpen={isModalOpen} closeModal={closeModal}/>}></Route>
          <Route path='/editmodal' element={<EditModal isOpen={isModalOpen} closeModal={closeModal}/>}></Route>
          <Route path='/folderaddmodal' element={<FolderAddModal isOpen={isModalOpen} closeModal={closeModal}/>}></Route>
          <Route path='/foldermodal' element={<FolderDeleteModal isOpen={isModalOpen} closeModal={closeModal}/>}></Route>
          <Route path='/linkdeletemodal' element={<LinkDeleteModal isOpen={isModalOpen} closeModal={closeModal}/>}></Route>
          <Route path='/sharemodal' element={<ShareModal isOpen={isModalOpen} closeModal={closeModal}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
