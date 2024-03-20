import styles from './AddLink.module.css';
import AddLinkInput from '../AddLinkInput/AddLinkInput';
import { Dispatch, SetStateAction } from 'react';

export interface AddLinkProps {
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLSpanElement>
  ) => void;
  setSharedUrl: Dispatch<SetStateAction<string>>;
}

function AddLink({
  handleAddLinkInFolderModalClick,
  setSharedUrl,
}: AddLinkProps) {
  return (
    <div className={styles['add-link-wrapper']}>
      <AddLinkInput
        handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
        setSharedUrl={setSharedUrl}
      />
    </div>
  );
}

export default AddLink;
