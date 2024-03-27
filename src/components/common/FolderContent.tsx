import styles from './FolderContent.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const FolderContent = ({ children }: Props) => {
  return <main className={cn('folder-content')}>{children}</main>;
};

export default FolderContent;
