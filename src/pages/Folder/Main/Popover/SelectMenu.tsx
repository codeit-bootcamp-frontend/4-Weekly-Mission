import { useState, forwardRef } from "react";
import DeleteModal from "components/common/Modal/DeleteModal";
import ListModal from "components/common/Modal/ListModal";
import { FolderList } from "constnats/types";
import * as S from "./SelectMenuStyle";

interface Props {
  url: string;
  folderList: FolderList[];
}

const SelectMenu = forwardRef<HTMLDivElement, Props>(
  ({ url, folderList }, ref) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showListModal, setShowInputModal] = useState(false);
    const handleDeleteModal = () => {
      setShowDeleteModal(!showDeleteModal);
    };
    const handleInputModal = () => {
      setShowInputModal(!showListModal);
    };
    return (
      <S.Container ref={ref}>
        <S.Delete onClick={handleDeleteModal}>삭제하기</S.Delete>
        <S.Add onClick={handleInputModal}>폴더에 추가</S.Add>
        {showDeleteModal && (
          <DeleteModal title="링크 삭제" text={url} onClose={handleDeleteModal}>
            삭제하기
          </DeleteModal>
        )}
        {showListModal && (
          <ListModal
            title="폴더에 추가"
            folderList={folderList}
            onClose={handleDeleteModal}
          >
            추가하기
          </ListModal>
        )}
      </S.Container>
    );
  }
);

export default SelectMenu;
