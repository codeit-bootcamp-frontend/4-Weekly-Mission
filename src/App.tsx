import Footer from './components/common/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
