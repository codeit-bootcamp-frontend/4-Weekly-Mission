import React, { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SharePage from './pages/SharePage/SharePage';
import FolderPage from './pages/FolderPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import GlobalStyles from './styles/Global.styled';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/share',
    element: <SharePage />
  },
  {
    path: '/folder',
    element: <FolderPage />
  }
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
