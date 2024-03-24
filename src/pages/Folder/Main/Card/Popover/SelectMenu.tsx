import { useState, forwardRef } from "react";
import DeleteModal from "components/common/Modal/DeleteModal";
import ListModal from "components/common/Modal/ListModal";
import { FolderList } from "constants/types";
import * as S from "./SelectMenuStyle";

interface Props {
  url: string;
  folderList: FolderList[];
}

const SelectMenu = forwardRef<HTMLDivElement, Props>(
  ({ url, folderList }, ref) => {
    const [isToggledDeleteModal, setIsToggledDeleteModal] = useState(false);
    const [isToggledListModal, setIsToggledListModal] = useState(false);

    const handleDeleteModal = () => {
      setIsToggledDeleteModal(!isToggledDeleteModal);
    };

    const handleListModal = () => {
      setIsToggledListModal(!isToggledListModal);
    };

    return (
      <S.Container ref={ref} onClick={(e) => e.preventDefault()}>
        <S.Delete onClick={handleDeleteModal}>삭제하기</S.Delete>
        <S.Add onClick={handleListModal}>폴더에 추가</S.Add>
        {isToggledDeleteModal && (
          <DeleteModal title="링크 삭제" text={url} onClose={handleDeleteModal}>
            삭제하기
          </DeleteModal>
        )}
        {isToggledListModal && (
          <ListModal
            title="폴더에 추가"
            folderList={folderList}
            onClose={handleListModal}
          >
            추가하기
          </ListModal>
        )}
      </S.Container>
    );
  }
);

export default SelectMenu;
