import checkIcon from "assests/img/check.png";
import { useState } from "react";
import * as S from "./ModalLinkAdd.styled";
import ModalCloseBtn from "components/ModalCloseBtn";
import ModalTitle from "components/ModalTitle";
import ModalEditBtn from "components/ModalEditBtn";
import TargetName from "components/TargetName";
import { CategoryDataType } from "typeStore";

interface Props {
  type: any;
  dispatch: any;
  folderList: CategoryDataType[];
}

const ModalLinkAdd: React.FC<Props> = ({ type, dispatch, folderList }) => {
  const [currentClick, setCurrentClick] = useState<string>("");
  const onClick = (value: string) => {
    setCurrentClick(value);
  };
  return (
    <S.Modal $type={type.type}>
      <ModalCloseBtn onClick={() => dispatch({ state: false })} />
      <S.Wrap>
        <ModalTitle>폴더에 추가</ModalTitle>
        <TargetName>{type.url}</TargetName>
      </S.Wrap>
      <S.FolderList>
        {folderList
          ? folderList.map((folder) => (
              <S.Folder
                onClick={() => onClick(folder.name)}
                $background={currentClick === folder.name}
              >
                {folder.name}
                <S.LinkCount>{folder.link.count}개 링크</S.LinkCount>
                <S.CheckIcon
                  src={checkIcon}
                  $show={currentClick === folder.name}
                />
              </S.Folder>
            ))
          : null}
      </S.FolderList>
      <ModalEditBtn linear>추가하기</ModalEditBtn>
    </S.Modal>
  );
};

export default ModalLinkAdd;
