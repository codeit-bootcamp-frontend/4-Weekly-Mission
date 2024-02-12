import './Header.css';
import Gnb from './Gnb';
import SharedHeaderContent from './SharedHeaderContent';

function Header() {
  return (
    <header className="header background-bg width-full">
      <Gnb />
      <SharedHeaderContent />
    </header>
  );
}

export default Header;
