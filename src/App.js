import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SharedPage from './pages/SharedPage/SharedPage';
import FolderPage from './pages/FolderPage/FolderPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: 'shared', element: <SharedPage /> },
  { path: 'folder', element: <FolderPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
