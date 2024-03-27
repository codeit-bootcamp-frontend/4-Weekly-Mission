import { ChangeEvent, useState } from 'react';
import styles from './FolderNameInput.module.css';

const FolderNameInput = ({ folderName = '' }) => {
  const [value, setValue] = useState(folderName);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const active = value ? 'active' : '';

  return (
    <input
      type="text"
      placeholder="내용 입력"
      value={value}
      className={`${styles.input} ${active && styles.active}`}
      onChange={handleChange}
    />
  );
};

export default FolderNameInput;
