import React, { MouseEvent } from "react";
import * as S from "../ModalStyled.tsx";
import * as STYLE from "./ModalDeleteStyled.tsx";

interface ModalDeleteProps {
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  buttonText: string;
}

const ModalDelete = ({
  setIsDeleteModalOpen,
  text,
  buttonText,
}: ModalDeleteProps) => {
  const handleCloseModal = (e: MouseEvent) => {
    e.preventDefault();
    setIsDeleteModalOpen(false);
  };
  return (
    <>
      <S.ModalBackground>
        <S.ModalBox>
          <S.CloseButton onClick={handleCloseModal}>
            <img src="images/close.svg" alt="" />
          </S.CloseButton>
          <S.Items>
            <STYLE.Title>
              <S.ItemsText>{text}</S.ItemsText>
              <STYLE.ItemsP>폴더명</STYLE.ItemsP>
            </STYLE.Title>
            <STYLE.Content>
              <STYLE.DeleteButton>{buttonText}</STYLE.DeleteButton>
            </STYLE.Content>
          </S.Items>
        </S.ModalBox>
      </S.ModalBackground>
    </>
  );
};

export default ModalDelete;
