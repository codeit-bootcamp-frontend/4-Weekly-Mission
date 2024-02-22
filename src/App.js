import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import FolderPage from 'pages/FolderPage/FolderPage';
import HomePage from 'pages/HomePage/HomePage';
import SharedPage from 'pages/SharedPage/SharedPage';

import './App.css';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: 'shared', element: <SharedPage /> },
  { path: 'folder', element: <FolderPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
