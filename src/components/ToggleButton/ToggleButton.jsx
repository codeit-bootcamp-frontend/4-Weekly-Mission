import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './ToggleButton.module.scss';

const ToggleButton = ({ children, items = [] }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleToggleButtonClick = event => {
    event.preventDefault();
    setIsToggled(!isToggled);
  };

  const handleItemClick = event => {
    setShowModal(prev => !prev);
    setSelectedItem(event.target.id);
  };

  const handleModalClick = () => {
    setShowModal(prev => !prev);
    setSelectedItem('');
  };

  return (
    <section className={styles.layout} onBlur={() => setIsToggled(false)}>
      <button className={styles.toggleButton} onClick={handleToggleButtonClick}>
        {children}
        <ul className={styles.itemBox}>
          {isToggled &&
            items.map(item => (
              <li className={styles.item} key={item}>
                <p id={item} onClick={handleItemClick}>
                  {item}
                </p>
                {showModal && selectedItem === item && <Modal title={item} onClick={handleModalClick} />}
              </li>
            ))}
        </ul>
      </button>
    </section>
  );
};

export default ToggleButton;
