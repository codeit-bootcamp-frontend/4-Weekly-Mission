import GNB from 'components/common/header/GNB';
import Footer from 'components/common/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <>
      <GNB />
      {/* 콘텐츠 영역 : 페이지마다 달라지는 영역 */}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
