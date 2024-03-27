import React, { useState } from "react";
import ModalEdit from "../Modal/ModalEdit/ModalEdit.tsx";
import ModalDelete from "../Modal/ModalDelete/ModalDelete.tsx";
import ModalShare from "../Modal/ModalShare/ModalShare.tsx";
import * as S from "./SelectedOptionStyled.tsx";

interface SelectedOptionProps {
  selectedFolder: string;
  activeButton: string;
}
function SelectedOption({ selectedFolder, activeButton }: SelectedOptionProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  return (
    <S.SelectedFolder>
      <S.FolderName>{selectedFolder}</S.FolderName>
      {activeButton !== "전체" && (
        <S.SelectedOption>
          <S.SelectedOptionContent onClick={handleOpenShareModal}>
            <img src="images/share.svg" alt="공유 이미지" />
            <S.ContentP>공유</S.ContentP>
          </S.SelectedOptionContent>
          {isShareModalOpen && (
            <ModalShare setIsShareModalOpen={setIsShareModalOpen} />
          )}
          <S.SelectedOptionContent onClick={handleOpenEditModal}>
            <img src="images/pen.svg" alt="이름 변경 이미지" />
            <S.ContentP>이름 변경</S.ContentP>
          </S.SelectedOptionContent>
          {isEditModalOpen && (
            <ModalEdit
              setIsEditModalOpen={setIsEditModalOpen}
              text="폴더 이름 변경"
              buttonText="변경하기"
            />
          )}
          <S.SelectedOptionContent onClick={handleOpenDeleteModal}>
            <img src="images/delete.svg" alt="삭제 이미지" />
            <S.ContentP>삭제</S.ContentP>
          </S.SelectedOptionContent>
          {isDeleteModalOpen && (
            <ModalDelete
              setIsDeleteModalOpen={setIsDeleteModalOpen}
              text="폴더 삭제"
              buttonText="삭제하기"
            />
          )}
        </S.SelectedOption>
      )}
    </S.SelectedFolder>
  );
}

export default SelectedOption;
