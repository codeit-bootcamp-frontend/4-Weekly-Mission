import { Outlet } from 'react-router-dom';
import Gnb from './Navigation/Gnb';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <Gnb />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
