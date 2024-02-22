import classNames from 'classnames';
import propTypes from 'prop-types';

import styles from 'components/Main/Main.module.css';

function Main({ children }) {
  const mainClasses = classNames(styles.main, 'width-full');
  const mainContainerClasses = classNames(styles['main-container'], 'margin-auto');

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
