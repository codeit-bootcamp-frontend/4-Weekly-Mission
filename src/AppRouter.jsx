import { Routes, Route } from 'react-router-dom';
import routes from './utils/constants/routes';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MainLayout from 'layout/MainLayout';
import FolderPage from 'pages/FolderPage';
import HomePage from 'pages/HomePage';
import SharedPage from 'pages/SharedPage';

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<FolderPage />} />
        <Route path={routes.home} element={<HomePage />}></Route>
        <Route path={routes.shared} element={<SharedPage />}></Route>
        <Route path={routes.folder} element={<FolderPage />}></Route>
      </Route>
      <Route path={routes.signin} element={<SignInPage />}></Route>
      <Route path={routes.signup} element={<SignUpPage />}></Route>
    </Routes>
  );
}

export default AppRouter;
