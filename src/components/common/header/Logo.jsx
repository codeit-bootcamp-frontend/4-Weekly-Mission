import logoURL from '../../../assets/logo.svg';
import './Logo.css';

function Logo() {
  return (
    <a href="./">
      <img className="logo" src={logoURL} alt="Linkbrary logo" />
    </a>
  );
}
export default Logo;
