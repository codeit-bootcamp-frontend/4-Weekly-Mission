import React from "react";
import * as S from "../components/Folder/FolderList/FolderListStyled.tsx";
interface Item {
  id: number;
  name: string;
}

interface RenderButtonProps {
  dataArray: Item[] | undefined;
  activeButton: string;
  handleButtonClick: (name: string) => void;
}

const renderButton = ({
  dataArray,
  activeButton,
  handleButtonClick,
}: RenderButtonProps) => {
  if (dataArray && Array.isArray(dataArray)) {
    return dataArray.map((item) => (
      <S.FolderButton
        key={item.id}
        active={activeButton === item.name}
        onClick={() => handleButtonClick(item.name)}
      >
        {item.name}
      </S.FolderButton>
    ));
  }
};

export default renderButton;
