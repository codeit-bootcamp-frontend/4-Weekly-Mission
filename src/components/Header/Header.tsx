import classNames from 'classnames';
import propTypes from 'prop-types';

import Gnb from 'components/Header/Gnb';
// import styles from 'components/Header/Header.module.css';

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
