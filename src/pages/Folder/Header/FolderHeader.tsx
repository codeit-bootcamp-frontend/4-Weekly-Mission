import AddLink from "../../../components/common/Input/AddLink/AddLink";
import * as S from "./FolderHeaderStyle";
import { Folder } from "../../../constnats/types";

interface Props {
  folderList: Folder[];
}

const FolderHeader = ({ folderList }: Props) => {
  console.log(folderList);
  return (
    <S.Container>
      <AddLink folderList={folderList} />
    </S.Container>
  );
};

export default FolderHeader;
