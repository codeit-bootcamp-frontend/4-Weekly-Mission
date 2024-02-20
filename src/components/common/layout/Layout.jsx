import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Nav position={location.pathname === '/folder' ? 'static' : 'sticky'} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
