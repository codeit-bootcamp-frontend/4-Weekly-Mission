import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SharePage from './pages/SharePage/SharePage';
import FolderPage from './pages/FolderPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import GlobalStyles from './styles/Global.styled';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route index element={<MainPage />} />
          {/* <Route path="signin" element={<LoginPage />} />
          <Route path="signup" element={<RegisterPage />} /> */}
          <Route path="share" element={<SharePage />} />
          <Route path="folder" element={<FolderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
