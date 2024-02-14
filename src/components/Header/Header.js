import propTypes from 'prop-types';
import './Header.css';
import Gnb from './Gnb';

function Header({ children }) {
  return (
    <header className="header background-bg width-full">
      <Gnb />
      {children}
    </header>
  );
}

Header.propTypes = {
  children: propTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
