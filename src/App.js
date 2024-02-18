import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main';

// 메인, 로그인, 회원가입 창을 다 사용할 수 있게 하기 위해
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
