import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Share from './components/Share';
import Folder from './components/Folder';
import Modal from './components/Modal';

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
          <Route path='/share' element={<Share/>}></Route>
          <Route path='/folder' element={<Folder/>}></Route>
          <Route path='/' element={<Modal isOpen={isModalOpen} closeModal={closeModal}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
