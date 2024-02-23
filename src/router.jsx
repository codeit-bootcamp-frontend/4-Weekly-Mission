import { createBrowserRouter } from 'react-router-dom';

import routes from 'constants/routes';
import Layout from 'components/template/Layout';
import LinkSharePage from 'pages/LinkSharePage';
import FolderPage from 'pages/FolderPage';
import Test from 'pages/Test';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: routes.shared,
        element: <LinkSharePage />,
      },
      {
        path: routes.folder,
        element: <FolderPage />,
      },
      {
        // 테스트용 페이지 입니다 :)
        path: routes.link,
        element: <Test />,
      },
    ],
  },
]);

export default router;
