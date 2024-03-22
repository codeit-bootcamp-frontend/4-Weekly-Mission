import AddLink from "pages/Folder/Header/Input/AddLink";
import { FolderList } from "constnats/types";
import * as S from "./FolderHeaderStyle";

interface Props {
  folderList: FolderList[];
}

const FolderHeader = ({ folderList }: Props) => {
  return (
    <S.Container>
      <AddLink folderList={folderList} />
    </S.Container>
  );
};

export default FolderHeader;
