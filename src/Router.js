import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import LandingPage from './pages/landing/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SharedPage from './pages/shared/SharedPage';
import FolderPage from './pages/folder/FolderPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='shared' element={<SharedPage />} />
          <Route path='folder' element={<FolderPage />} />
        </Route>
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
