import { useState } from "react";
import { SmallButton } from "../../Button/ButtonStyle";
import { LINK_ICON } from "../../../../constnats/image";
import { ADD_LINK_PLACEHOLDER } from "../../../../constnats/constant";
import ListModal from "../../Modal/ListModal";
import * as S from "./AddLinkStyle";

const AddLink = ({ folderList }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.Container>
      <S.Box>
        <S.Image src={LINK_ICON} alt="add" />
        <S.Input placeholder={ADD_LINK_PLACEHOLDER} />
      </S.Box>
      <SmallButton onClick={handleModal}>추가하기</SmallButton>
      {showModal && (
        <ListModal folderList={folderList} onClose={handleModal}>
          폴더에 추가하기
        </ListModal>
      )}
    </S.Container>
  );
};

export default AddLink;
