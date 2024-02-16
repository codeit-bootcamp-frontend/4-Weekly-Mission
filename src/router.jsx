import { createBrowserRouter } from 'react-router-dom';

import routes from 'constants/routes';
import Layout from 'components/template/Layout';
import SharePage from 'pages/SharePage';
import Test from 'pages/Test';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        //7주차 과제 요구사항 - 링크공유 페이지를 '/'에 보이도록, 추후 메인페이지로 변경 예정
        path: routes.home,
        element: <SharePage />,
      },
      {
        //7주차 과제 요구사항 - 링크공유 페이지를 '/'에 보이도록, 추후 메인페이지로 변경 예정
        path: routes.link,
        element: <Test />,
      },
    ],
  },
]);

export default router;
