import React, { ReactNode, useState } from "react";
import ModalEdit from "../Modal/ModalEdit/ModalEdit.tsx";
import * as S from "./FolderListStyled.tsx";

interface FolderListProps {
  activeButton: string;
  handleButtonClick: (button: string) => void;
  renderedButtons: ReactNode;
}

function FolderList({
  activeButton,
  handleButtonClick,
  renderedButtons,
}: FolderListProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsEditModalOpen(true);
  };

  return (
    <S.FolderListContainer>
      <S.FolderLists>
        <S.FolderButton
          active={activeButton === "전체"}
          onClick={() => handleButtonClick("전체")}
        >
          전체
        </S.FolderButton>
        {renderedButtons}
      </S.FolderLists>
      <S.FolderAdd>
        <S.FolderAddText onClick={handleOpenModal}>폴더 추가</S.FolderAddText>
        {isEditModalOpen && (
          <ModalEdit
            setIsEditModalOpen={setIsEditModalOpen}
            text="폴더 추가"
            buttonText="추가하기"
          />
        )}
        <img
          className="Folder-add-image"
          src="images/add.svg"
          alt="폴더 추가 이미지"
        />
      </S.FolderAdd>
    </S.FolderListContainer>
  );
}

export default FolderList;
