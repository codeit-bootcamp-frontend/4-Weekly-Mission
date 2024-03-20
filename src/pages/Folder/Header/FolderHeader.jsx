import AddLink from "../../../components/common/Input/AddLink/AddLink";
import * as S from "./FolderHeaderStyle";

const FolderHeader = ({ folderList }) => {
  console.log(folderList);
  return (
    <S.Container>
      <AddLink folderList={folderList} />
    </S.Container>
  );
};

export default FolderHeader;
