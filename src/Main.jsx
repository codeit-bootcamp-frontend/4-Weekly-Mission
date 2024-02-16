import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { OutletLayout } from './Main.styles';

const Main = () => {
  return (
    <>
      <Header />
      <OutletLayout>
        <Outlet />
      </OutletLayout>
      <Footer />
    </>
  );
};
export default Main;
