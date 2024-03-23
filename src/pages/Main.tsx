import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const tempStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  fontSize: '27px',
};

function Main() {
  return (
    <main>
      <Header />
      <Outlet />
      <div style={tempStyle}>
        <Link to="/shared">7주차</Link>
        <Link to="/folder">8~9주차</Link>
      </div>
      <Footer />
    </main>
  );
}

export default Main;
