import { CiShare1 } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { TiPencil } from 'react-icons/ti';

import styles from './FolderNavbar.module.scss';

const FolderNavbar = () => {
  return (
    <ul className={styles.layout}>
      <li className={styles.item}>
        <CiShare1 />
        <span>공유</span>
      </li>
      <li className={styles.item}>
        <TiPencil />
        <span>이름 변경</span>
      </li>
      <li className={styles.item}>
        <RiDeleteBinLine />
        <span>삭제</span>
      </li>
    </ul>
  );
};

export default FolderNavbar;
