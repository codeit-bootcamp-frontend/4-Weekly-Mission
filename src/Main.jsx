import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Main;
