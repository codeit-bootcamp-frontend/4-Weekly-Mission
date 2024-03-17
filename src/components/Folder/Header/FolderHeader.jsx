import AddLink from "../../common/Input/AddLink/AddLink";
import * as S from "./FolderHeaderStyle";

const FolderHeader = ({ folderList }) => {
  return (
    <S.Container>
      <AddLink folderList={folderList} />
    </S.Container>
  );
};

export default FolderHeader;
