import logoImg from '../assets/logo.png';
import LogInButton from './LogInButton';
import '../style/Gnb.css';

function Gnb() {
  return (
    <nav>
      <div className='gnb-container'>
        <a href='index.html'>
          <img src={logoImg} alt='logo' className='logo' />
        </a>
        <LogInButton />
      </div>
    </nav>
  );
}

export default Gnb;
