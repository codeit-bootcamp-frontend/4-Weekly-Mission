import classNames from 'classnames';
import propTypes from 'prop-types';

import styles from './Main.module.css';

function Main({ children }) {
  const mainClasses = classNames(styles.main, 'flex-col');
  const mainContainerClasses = classNames(styles['main-container'], 'width-full');

  return (
    <main className={mainClasses}>
      <div className={mainContainerClasses}>{children}</div>
    </main>
  );
}

Main.propTypes = {
  children: propTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
