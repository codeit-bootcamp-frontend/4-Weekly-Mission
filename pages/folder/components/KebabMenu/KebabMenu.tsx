import { useState } from "react";
import * as S from "./KebabMenuStyled";
import { AddToFolder } from "../../../../components/Modals/AddToFolder";
import { MouseEvent } from "react";
import { FolderListDataForm } from "../../../../types/DataForm";
import DeleteLink from "../../../../components/Modals/DeleteLink";

interface Props {
  selectURL: string;
  data: FolderListDataForm[];
}

export function KebabMenu({ selectURL, data }: Props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [addToFolderModal, setAddToFolderModal] = useState(false);

  const handleModalClose = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowDeleteModal(false);
    setAddToFolderModal(false);
  };

  const handleShowDeleteModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDeleteModal(true);
  };

  const handleShowAddToFolderModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAddToFolderModal(true);
  };

  return (
    <S.CardContentKebabMenu>
      {showDeleteModal && (
        <DeleteLink
          isOpenModal={showDeleteModal}
          handleModalClose={handleModalClose}
          deleteURL={selectURL}
        />
      )}
      {addToFolderModal && (
        <AddToFolder
          isOpenModal={addToFolderModal}
          handleModalClose={handleModalClose}
          linkURL={selectURL}
          data={data}
        />
      )}
      <S.CardContentKebabMenuDelete
        type="button"
        onClick={handleShowDeleteModal}
      >
        삭제하기
      </S.CardContentKebabMenuDelete>
      <S.CardContentKebabMenuDelete
        type="button"
        onClick={handleShowAddToFolderModal}
      >
        폴더에 추가
      </S.CardContentKebabMenuDelete>
    </S.CardContentKebabMenu>
  );
}
