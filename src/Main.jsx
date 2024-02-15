import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { MainOutlet, OutletBox } from './Main.styles';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Navbar />
      <OutletBox>
        <Outlet />
      </OutletBox>
      <Footer />
    </>
  );
};
export default Main;
