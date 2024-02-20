import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogInButton from './LogInButton';
import logoImg from '../assets/logo.png';
import './Gnb.css';

const Gnb = () => {
  const [GnbHide, setGnbHide] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setGnbHide(location.pathname === '/folder');
  }, [location]);

  return (
    <nav className={`gnb ${GnbHide ? 'gnb-static' : 'gnb-sticky'}`}>
      <Link to='/'>
        <img src={logoImg} alt='logo' className='logo' />
      </Link>
      <LogInButton className='table-btn' />
    </nav>
  );
};

export default Gnb;
