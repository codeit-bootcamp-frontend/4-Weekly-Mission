import { useState } from 'react';

import styles from './ToggleButton.module.scss';

const ToggleButton = ({ children, items = [] }) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggleButtonClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsToggled(!isToggled);
  };

  return (
    <section className={styles.layout} onBlur={() => setIsToggled(false)}>
      <button className={styles.toggleButton} onClick={handleToggleButtonClick}>
        {children}
        <ul className={styles.itemBox}>{isToggled && items.map(item => <li className={styles.item}>{item}</li>)}</ul>
      </button>
    </section>
  );
};

export default ToggleButton;
