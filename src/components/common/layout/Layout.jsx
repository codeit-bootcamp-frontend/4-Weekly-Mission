import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
