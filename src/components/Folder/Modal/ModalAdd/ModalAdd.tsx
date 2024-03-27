import React, { useState } from "react";
import * as S from "../ModalStyled.tsx";
import * as STYLE from "./ModalAddStyled.tsx";

interface Data {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

interface ModalAddProps {
  dataArray: Data[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAdd = ({ dataArray, setIsModalOpen }: ModalAddProps) => {
  const [isClick, setIsClick] = useState<number | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (id: number) => {
    setIsClick(id);
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
              <S.ItemsText>폴더에 추가</S.ItemsText>
              <STYLE.ItemsP>링크 주소</STYLE.ItemsP>
            </STYLE.Title>
            <STYLE.Content>
              <STYLE.FolderList>
                {dataArray.map((data) => (
                  <STYLE.FolderListButton
                    key={data.id}
                    onClick={() => handleClick(data.id)}
                    isClick={isClick === data.id}
                  >
                    <STYLE.ListName>{data.name}</STYLE.ListName>
                    <STYLE.ListCount>{data.link.count}개 링크</STYLE.ListCount>
                  </STYLE.FolderListButton>
                ))}
              </STYLE.FolderList>
              <STYLE.AddButton>추가하기</STYLE.AddButton>
            </STYLE.Content>
          </S.Items>
        </S.ModalBox>
      </S.ModalBackground>
    </>
  );
};

export default ModalAdd;
