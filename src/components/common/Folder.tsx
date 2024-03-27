import styles from './Folder.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { FolderList } from '../../types/type';

interface Props {
  folder: FolderList;
  onClickFolder: React.Dispatch<
    React.SetStateAction<{
      id: string | number;
      name: string;
    }>
  >;
  isSelected: boolean;
}

const Folder = ({ folder, onClickFolder, isSelected }: Props) => {
  const { id, name } = folder;
  return (
    <a className={cn('folder', isSelected ? 'folder-selected' : '')} onClick={() => onClickFolder({ id, name })}>
      {name}
    </a>
  );
};

export default Folder;
