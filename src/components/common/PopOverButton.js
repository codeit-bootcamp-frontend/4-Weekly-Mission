import { useState } from 'react';
import ModalPortal from '../modal/ModalPortal';
import checkIcon from '../../assets/icon-check.svg';

// TODO: 링크에 추가하기 부분 중복. css 병합 또는 컴포넌트 추가 필요
import './AddSearchLink.css';
import './PopOverButton.css';

const PopOverButton = ({ link }) => {
  const [isFolderDeleteModal, setIsFolderDeleteModal] = useState(false);
  const [isAddToFolder, setIsAddToFolder] = useState(false);

  const deleteFolderModal = () => {
    setIsFolderDeleteModal(!isFolderDeleteModal);
  };

  const addToFolderModal = () => {
    setIsAddToFolder(!isAddToFolder);
  };

  // TODO: 추후 데이터 연동 작업 예정
  const deleteFolder = () => {};
  const addToFolder = () => {};

  return (
    <div className="pop_over_button">
      <div className="pop_over_text" onClick={deleteFolderModal}>
        삭제하기
        {isFolderDeleteModal && (
          <ModalPortal
            onClick={deleteFolderModal}
            modalTitle="링크 삭제"
            buttonClass="button modal_button back_red"
            buttonText="삭제하기"
            modalButtonFunc={deleteFolder}
          />
        )}
      </div>
      <div className="pop_over_text" onClick={addToFolderModal}>
        폴더에 추가
        {isAddToFolder && (
          <ModalPortal
            onClick={addToFolderModal}
            buttonClass="button modal_button back_gra_purpleblue"
            modalTitle="폴더에 추가"
            buttonText="추가하기"
            selectFolderName="링크 주소"
          >
            <div className="folder_list">
              <div className="folder">
                <div className="folder_name">코딩팁</div>
                <div className="folder_count">7개 링크</div>
              </div>
              <div className="folder">
                <div className="folder_name">채용사이트</div>
                <div className="folder_count">12개 링크</div>
              </div>
              <div className="folder">
                <div className="folder_name">유용한 글</div>
                <div className="folder_count">30개 링크</div>
              </div>
              <div className="folder select">
                <div className="folder_name">나만의 장소</div>
                <div className="folder_count">10개 링크</div>
                <img className="check_icon" src={checkIcon} />
              </div>
            </div>
          </ModalPortal>
        )}
      </div>
    </div>
  );
};

export default PopOverButton;
