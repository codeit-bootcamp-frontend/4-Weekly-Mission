/* eslint-disable */
import styles from './FolderPageLinkitem.module.css';
import * as functions from '../../../../functions/formatTimeAgo.js';
import KebabModal from '../../modal/KebabModal/KebabModal.js';
import useModal from 'hooks/useModal';
import DeleteLinkModal from '../../modal/DeleteLinkModal/DeleteLinkModal.js';
function FolderPageLinkItem({
  description,
  image_source,
  created_at,
  url,
  handleAddLinkInFolderModalClick,
  setSharedUrl,
}) {
  const created_date = created_at.slice(0, 10);

  const {
    isShowModal: isShowKebabModal,
    handleModalClick: handleClickKebabModal,
  } = useModal(false);

  const {
    isShowModal: isShowDeleteLinkModal,
    handleModalClick: handleDeleteLinkModalClick,
  } = useModal(false);

  return (
    <>
      <div className={styles.item_card_wrapper}>
        <a href={url} className={styles.item_card_link}>
          <div className={styles.item_card_image_box}>
            {!image_source ? (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/folder_no_image.svg`}
                className={styles.item_card_image}
                alt='card_no_image'
              />
            ) : (
              <img
                src={image_source}
                className={styles.item_card_image}
                alt='card_image'
              />
            )}
          </div>
        </a>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/item_card_star_icon.svg`}
          className={styles.item_card_star_icon}
          alt='card_star_icon'
        />
        <div className={styles.item_card_text_box}>
          <div className={styles.item_card_createdAt}>
            {functions.formatTimeAgo(created_at)}
          </div>
          <div className={styles.item_card_description}>{description}</div>
          <div className={styles.item_card_created_date}>{created_date}</div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/item_card_kebab_icon.svg`}
            className={styles.item_card_kebab_icon}
            alt='card_kebab_image'
            onClick={handleClickKebabModal}
          />
        </div>
        {isShowKebabModal && (
          <KebabModal
            handleClickKebabModal={handleClickKebabModal}
            handleDeleteLinkModalClick={handleDeleteLinkModalClick}
            handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
            url={url}
            setSharedUrl={setSharedUrl}
          />
        )}
      </div>
      {isShowDeleteLinkModal && (
        <DeleteLinkModal
          url={url}
          handleDeleteLinkModalClick={handleDeleteLinkModalClick}
        />
      )}
    </>
  );
}

export default FolderPageLinkItem;
