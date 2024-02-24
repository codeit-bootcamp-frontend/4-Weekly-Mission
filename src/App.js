import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { useState } from 'react';
import Main from './components/Main';
// import Modal from './components/Modal';

// 메인, 로그인, 회원가입 창을 다 사용할 수 있게 하기 위해
function App() {
  //모달 관련
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      {/* <button onClick={openModal} style={{
        background: '#fff',
        position: 'absolute',
        width : '100px',
        height : '30px',
        zIndex: 3
      }}>여는버튼</button>임시로 모달 여는 버튼 */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          {/* <Route path='/' element={<Modal isOpen={isModalOpen} closeModal={closeModal}/>}></Route>추후에 모달창 주소 옮기기 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
