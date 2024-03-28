import classNames from 'classnames';
import React from 'react';

import Gnb from 'components/Header/Gnb';
// import styles from 'components/Header/Header.module.css';

interface HeaderProps {
  children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  const headerClasses = classNames('background-bg', 'width-full');

  return (
    <header className={headerClasses}>
      <Gnb />
      {children}
    </header>
  );
}

export default Header;
