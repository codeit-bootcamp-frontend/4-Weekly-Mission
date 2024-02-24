import styles from './AddLinkInput.module.css';
import AddLinkButton from './AddLinkButton';
function AddLinkInput({ handleAddLinkInFolderModalClick, setSharedUrl }) {
  function handleInputChange(e) {
    setSharedUrl(e.target.value);
  }
  return (
    <>
      <div className={styles['add-link-input-wrapper']}>
        <input
          className={styles['add-link-input']}
          placeholder='링크를 추가해 보세요'
          onChange={handleInputChange}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/add_link_input_icon.svg`}
          alt='add_link_input_icon'
          className={styles['add-link-input-icon']}
        />
        <AddLinkButton
          handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
        />
      </div>
    </>
  );
}

export default AddLinkInput;
