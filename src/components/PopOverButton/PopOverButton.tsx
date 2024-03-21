import { useState } from 'react';
import { PopOverButtonProps } from './PopOverButton.types';
import styles from './PopOverButton.module.scss';

const PopOverButton = ({ children, items = [], onClick }: PopOverButtonProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsToggled(!isToggled);
  };

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    onClick(event.currentTarget.id);
  };

  return (
    <section className={styles.layout}>
      <button className={styles.toggleButton} onClick={handleToggleButtonClick}>
        {children}
        <ul className={styles.itemBox}>
          {isToggled &&
            items.map((item, index) => (
              <li className={styles.item} key={index} id={item} onClick={handleItemClick}>
                <p>{item}</p>
              </li>
            ))}
        </ul>
      </button>
    </section>
  );
};

export default PopOverButton;
