import { useState, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { modalTypes } from '../../../util/constants';
import styles from './Popover.module.css';
import DeleteLink from '../../common/modal/DeleteLink';
import Add from '../../common/modal/Add';

interface PopoverProps {
  url: string;
  show: boolean;
  onPopoverClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Popover = ({ url, show, onPopoverClick }: PopoverProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <>
      {show && (
        <div className={styles.container} onClick={onPopoverClick}>
          <button
            className={`popover-item ${styles.btn}`}
            data-modal={modalTypes.deleteLink}
            onClick={handleShowDeleteModal}>
            삭제하기
          </button>
          <button className={`popover-item ${styles.btn}`} data-modal={modalTypes.add} onClick={handleShowAddModal}>
            폴더에 추가
          </button>
        </div>
      )}
      {showDeleteModal && createPortal(<DeleteLink link={url} onCloseModal={handleCloseDeleteModal} />, document.body)}
      {showAddModal && createPortal(<Add link={url} onCloseModal={handleCloseAddModal} />, document.body)}
    </>
  );
};

export default Popover;
