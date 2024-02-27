import { FiPlus } from 'react-icons/fi';

import styles from './FoldersNavbar.module.scss';

const FoldersNavbar = ({ items, selectedItem, setSelectedItem }) => {
  return (
    <div className={styles.layout}>
      <ul className={styles.box}>
        {items.map(item => (
          <li key={item.id}>
            <div
              id={item.id}
              className={`${styles.colorBox} ${selectedItem?.id === item.id && styles.fillBackground}`}
              onClick={() => setSelectedItem && setSelectedItem({ id: item.id, name: item.name })}>
              {item.name}
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.addButton}>
        <span>폴더 추가</span> <FiPlus />
      </button>
    </div>
  );
};

export default FoldersNavbar;
