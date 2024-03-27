import { useState, ChangeEvent } from "react";
import * as S from "./AddLinkBarStyled";
import { ADD_ICON } from "./constant";
import { AddToFolder } from "../../../../components/Modals/AddToFolder";
import { FolderListDataForm } from "../../../../types/DataForm";

export function AddLinkBar({ data }: { data: FolderListDataForm[] }) {
  const [inputValue, setInputValue] = useState<string>();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isShowAddToFolder, setIsAddToFolder] = useState(false);

  const handleEmptyError = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEmpty(e.target.value === "" ? true : false);
  };

  const handleAddToFolder = () => {
    setIsAddToFolder(true);
  };

  const handleCloseAddToFolder = () => {
    setIsAddToFolder(false);
  };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <S.AddLinkContainer>
      <S.AddLinkBar isEmpty={isEmpty}>
        <S.AddLinkInputContainer>
          <S.AddLinkIcon src={ADD_ICON} alt="링크 추가하기 아이콘" />
          <S.AddLinkInput
            type="text"
            placeholder="링크를 추가해 보세요"
            onBlur={handleEmptyError}
            onChange={handleInputValue}
          />
        </S.AddLinkInputContainer>
        <S.AddInputButton onClick={handleAddToFolder} disabled={isEmpty}>
          {" "}
          추가하기{" "}
        </S.AddInputButton>
        {isShowAddToFolder && (
          <AddToFolder
            isOpenModal={isShowAddToFolder}
            handleModalClose={handleCloseAddToFolder}
            linkURL={inputValue}
            data={data}
          />
        )}
      </S.AddLinkBar>
    </S.AddLinkContainer>
  );
}
