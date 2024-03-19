import { useState } from 'react';
import styles from './PopOverButton.module.scss';

const PopOverButton = ({ children, items = [], onClick }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleButtonClick = event => {
    event.preventDefault();
    setIsToggled(!isToggled);
  };

  const handleItemClick = event => {
    onClick(event.target.id);
  };

  return (
    <section className={styles.layout}>
      <button className={styles.toggleButton} onClick={handleToggleButtonClick}>
        {children}
        <ul className={styles.itemBox}>
          {isToggled &&
            items.map((item, index) => (
              <li className={styles.item} key={index} onClick={handleItemClick}>
                <p id={item}>{item}</p>
              </li>
            ))}
        </ul>
      </button>
    </section>
  );
};

export default PopOverButton;
