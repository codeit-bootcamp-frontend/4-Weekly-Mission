import styles from './AddLink.module.css';
import AddLinkInput from '../AddLinkInput/AddLinkInput';

function AddLink({ handleAddLinkInFolderModalClick, sharedUrl, setSharedUrl }) {
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
