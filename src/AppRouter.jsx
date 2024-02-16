import { Routes, Route } from 'react-router-dom';
import routes from './utils/constants/routes';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import MainLayout from 'layout/MainLayout';
import FolderPage from 'pages/FolderPage';

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routes.home} element={<MainPage />}></Route>
        <Route path={routes.folder} element={<FolderPage />}></Route>
      </Route>
      <Route path={routes.signin} element={<SignInPage />}></Route>
      <Route path={routes.signup} element={<SignUpPage />}></Route>
    </Routes>
  );
}

export default AppRouter;
