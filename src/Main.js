import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path='signin' element={<SignInPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='shared' element={<SharedPage />} />
          <Route path='folder' element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
