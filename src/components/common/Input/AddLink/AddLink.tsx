import { useState } from "react";
import { AddLinkButton } from "../../Button/ButtonStyle";
import { LINK_ICON } from "../../../../constnats/image";
import ListModal from "../../Modal/ListModal";
import { Folder } from "../../../../constnats/types";
import * as S from "./AddLinkStyle";

interface Props {
  folderList: Folder[];
}

const AddLink = ({ folderList }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.Container>
      <S.Box>
        <S.Image src={LINK_ICON} alt="add" />
        <S.Input placeholder="링크를 추가해 보세요" />
      </S.Box>
      <AddLinkButton onClick={handleModal}>추가하기</AddLinkButton>
      {showModal && (
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
