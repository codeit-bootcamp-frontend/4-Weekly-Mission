import React, { MouseEvent } from "react";
import * as S from "../ModalStyled.tsx";
import * as STYLE from "./ModalEditStyled.tsx";

interface ModalEditProps {
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  buttonText: string;
}

const ModalEdit = ({
  setIsEditModalOpen,
  text,
  buttonText,
}: ModalEditProps) => {
  const handleCloseModal = (e: MouseEvent) => {
    e.preventDefault();
    setIsEditModalOpen(false);
  };
  return (
    <>
      <S.ModalBackground>
        <S.ModalBox>
          <S.CloseButton onClick={handleCloseModal}>
            <img src="images/close.svg" alt="" />
          </S.CloseButton>
          <S.Items>
            <S.ItemsText>{text}</S.ItemsText>
            <STYLE.Content>
              <STYLE.Input type="text" placeholder="내용 작성 중.." />
              <STYLE.EditButton>{buttonText}</STYLE.EditButton>
            </STYLE.Content>
          </S.Items>
        </S.ModalBox>
      </S.ModalBackground>
    </>
  );
};

export default ModalEdit;
