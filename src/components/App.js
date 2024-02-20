import { Outlet } from 'react-router-dom';
import Gnb from './Gnb';
import Footer from './Footer';

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
