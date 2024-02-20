import propTypes from 'prop-types';
import classNames from 'classnames';
// import styles from './Header.module.css';
import Gnb from './Gnb';

function Header({ children }) {
  const headerClasses = classNames('background-bg', 'width-full');

  return (
    <header className={headerClasses}>
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
