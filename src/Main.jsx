import { Outlet } from 'react-router-dom';

import { OutletLayout } from './Main.styles';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

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
