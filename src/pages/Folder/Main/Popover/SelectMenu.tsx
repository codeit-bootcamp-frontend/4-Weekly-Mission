import { useState, forwardRef } from "react";
import { DeleteModal, ListModal } from "components/common/Modal/Modal";
import { FolderList } from "constnats/types";
import * as S from "./SelectMenuStyle";

interface Props {
  url: string;
  folderList: FolderList[];
}

const SelectMenu = forwardRef<HTMLDivElement, Props>(
  ({ url, folderList }, ref) => {
    const [isToggledListModal, setIsToggledListModal] = useState(false);
    const [isToggledDeleteModal, setIsToggledDeleteModal] = useState(false);

    const handleListModal = () => {
      setIsToggledListModal(!isToggledListModal);
    };
    const handleDeleteModal = () => {
      setIsToggledDeleteModal(!isToggledDeleteModal);
    };

    return (
      <S.Container ref={ref}>
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
