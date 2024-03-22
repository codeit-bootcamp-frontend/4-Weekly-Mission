import React, { useState } from "react";
import { useGetFolderById } from "../../../hooks/useGetFolder.tsx";
import ModalAdd from "../Modal/ModalAdd/ModalAdd.tsx";
import * as S from "./LinkBarStyled.tsx";

interface Data {
  data: any;
}

function LinkBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const { data }: Data = useGetFolderById();
  const dataArray = data?.data;

  return (
    <S.LinkBar>
      <S.Item>
        <S.LinkIcon src="./images/link.svg" alt="링크 아이콘" />
        <S.Input type="text" placeholder="링크를 추가해 보세요" />
        <S.Button onClick={handleOpenModal}>추가하기</S.Button>
        {isModalOpen && (
          <ModalAdd setIsModalOpen={setIsModalOpen} dataArray={dataArray} />
        )}
      </S.Item>
    </S.LinkBar>
  );
}

export default LinkBar;
