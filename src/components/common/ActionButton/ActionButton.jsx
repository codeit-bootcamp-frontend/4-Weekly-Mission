import { useState } from "react";
import { ADD_FOLDER_ICON } from "../../../constnats/image";
import * as S from "./ActionButtonStyle";

import InputModal from "../Modal/InputModal";

const ActionButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.Container onClick={handleModal}>
      <S.Title>폴더 추가</S.Title>
      <S.Image src={ADD_FOLDER_ICON} alt="add" />
      {showModal && (
        <InputModal
          title="폴더 추가"
          placeholder="내용입력"
          onClose={handleModal}
        >
          추가하기
        </InputModal>
      )}
    </S.Container>
  );
};

export default ActionButton;
