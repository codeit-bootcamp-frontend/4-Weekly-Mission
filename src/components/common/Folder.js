import styles from './Folder.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

const Folder = ({ folder, onClickFolder, isSelected }) => {
  const { id, name } = folder;
  return (
    <a className={cn('folder', isSelected ? 'folder-selected' : '')}
      onClick={() => onClickFolder({ id, name })}
    >
      {name}</a>
  );
};

export default Folder;