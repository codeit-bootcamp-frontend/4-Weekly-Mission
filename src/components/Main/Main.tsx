import classNames from 'classnames';
import React from 'react';

import styles from 'components/Main/Main.module.css';

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  const mainClasses = classNames(styles.main, 'width-full');
  const mainContainerClasses = classNames(styles['main-container'], 'margin-auto');

  return (
    <main className={mainClasses}>
      <div className={mainContainerClasses}>{children}</div>
    </main>
  );
}

export default Main;
