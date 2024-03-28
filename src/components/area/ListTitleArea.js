import { useEffect, useState } from 'react';
import ModalPortal from '../modal/ModalPortal';
import InputBox from '../common/InputBox';
import ShareFolder from '../ShareFolder';
import shareIcon from '../../assets/icon_share.svg';
import deleteIcon from '../../assets/icon_delete.svg';
import editIcon from '../../assets/icon_edit.svg';
import './ListTitleArea.css';

const ListTitleArea = ({ title }) => {
  const [isShareModal, setIsShareModal] = useState(false);
  const [isRenameModal, setIsRenameModal] = useState(false);
  const [isDeleteFolderModal, setIsDeleteFolderModal] = useState(false);

  const toggleShareModal = () => {
    setIsShareModal(!isShareModal);
  };

  const toggleRenameModal = () => {
    setIsRenameModal(!isRenameModal);
  };

  const toggleDeleteFolderModal = () => {
    setIsDeleteFolderModal(!isDeleteFolderModal);
  };

  const changeFolderName = () => {};
  const deleteFolderName = () => {};
  const shareFolder = () => {};

  return (
    <div className="list_title_area">
      <h1 className="list_title_text">{title ? title : '전체'}</h1>
      <div className="list_title_button_area">
        <p className="icon_text" onClick={toggleShareModal}>
          <img src={shareIcon} />
          공유
          {isShareModal && (
            <ModalPortal
              onClick={toggleShareModal}
              modalTitle="폴더 공유"
              buttonClass="button modal_button back_gra_purpleblue"
              modalButtonFunc={shareFolder}
              selectFolderName="SNS아이콘들"
            >
              <ShareFolder></ShareFolder>
            </ModalPortal>
          )}
        </p>
        <p className="icon_text" onClick={toggleRenameModal}>
          <img src={deleteIcon} />
          이름변경
          {isRenameModal && (
            <ModalPortal
              onClick={toggleRenameModal}
              modalTitle="폴더 이름 변경"
              buttonClass="button modal_button back_gra_purpleblue"
              buttonText="변경하기"
              modalButtonFunc={changeFolderName}
              selectFolderName="폴더명"
            >
              <InputBox type="text" placeholder="내용 입력" />
            </ModalPortal>
          )}
        </p>
        <p className="icon_text" onClick={toggleDeleteFolderModal}>
          <img src={editIcon} />
          삭제
          {isDeleteFolderModal && (
            <ModalPortal
              onClick={toggleDeleteFolderModal}
              modalTitle="폴더 삭제"
              buttonClass="button modal_button back_red"
              buttonText="삭제하기"
              modalButtonFunc={deleteFolderName}
              selectFolderName="폴더명"
            ></ModalPortal>
          )}
        </p>
      </div>
    </div>
  );
};

export default ListTitleArea;
