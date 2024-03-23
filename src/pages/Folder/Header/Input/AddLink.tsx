import { useState } from "react";
import { AddLinkButton } from "components/common/Button/ButtonStyle";
import ListModal from "components/common/Modal/ListModal";
import { FolderList } from "constants/types";
import { LINK_ICON } from "constants/image";
import * as S from "./AddLinkStyle";

interface Props {
  folderList: FolderList[];
}

const AddLink = ({ folderList }: Props) => {
  const [isToggledModal, setIsToggledModal] = useState(false);

  const handleModal = () => {
    setIsToggledModal(!isToggledModal);
  };

  return (
    <S.Container>
      <S.Box>
        <S.Image src={LINK_ICON} alt="add" />
        <S.Input placeholder="링크를 추가해 보세요" />
      </S.Box>
      <AddLinkButton onClick={handleModal}>추가하기</AddLinkButton>
      {isToggledModal && (
        <ListModal
          title="폴더에 추가"
          folderList={folderList}
          onClose={handleModal}
        >
          폴더에 추가하기
        </ListModal>
      )}
    </S.Container>
  );
};

export default AddLink;
