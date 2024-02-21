import MainPage from './pages/MainPage';
import SharePage from './pages/SharePage';
import FolderPage from './pages/FolderPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GlobalStyles from '../src/styles/Global.styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='signin' element={<LoginPage />} />
          <Route path='signup' element={<RegisterPage />} />
          <Route path='share' element={<SharePage />} />
          <Route path='folder' element={<FolderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
