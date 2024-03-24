import { createBrowserRouter } from 'react-router-dom';

import routes from 'constants/routes';
import Layout from 'components/template/Layout';
import LinkSharePage from 'pages/LinkSharePage';
import FolderPage from 'pages/FolderPage';
import MainPage from 'pages/MainPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: routes.home,
        element: <MainPage />,
      },
      {
        path: routes.shared,
        element: <LinkSharePage />,
      },
      {
        path: routes.folder,
        element: <FolderPage />,
      },
    ],
  },
]);

export default router;
