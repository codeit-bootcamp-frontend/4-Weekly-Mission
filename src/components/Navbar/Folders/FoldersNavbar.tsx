import { FiPlus } from 'react-icons/fi';
import { cn } from '../../../utils/classNames';
import { FoldersNavbarProps } from './FoldersNavbar.types';
import styles from './FoldersNavbar.module.scss';

const FoldersNavbar = ({ items, selectedItem, onChangeSelectItem }: FoldersNavbarProps) => {
  const handleItemClick = (id: number, name: string) => {
    onChangeSelectItem(id, name);
  };
  return (
    <div className={styles.layout}>
      <ul className={styles.box}>
        {items.map(item => (
          <li key={item.id}>
            <div
              className={cn(styles.colorBox, selectedItem?.id === item.id && styles.fill)}
              onClick={() => handleItemClick(item.id, item.name)}>
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
