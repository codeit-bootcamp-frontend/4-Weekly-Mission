import { useState } from "react";
import { FolderList } from "constnats/types";
import * as S from "./SortToolbarStyle";

interface Props {
  folderList: FolderList[];
  onChange: (folder: FolderList, folderList: FolderList[]) => void;
}

const Sort = ({ folderList, onChange }: Props) => {
  const [focus, setFocus] = useState<number | null>(null);
  const handleClick = (title: FolderList) => {
    setFocus(title.id);
    onChange(title, folderList);
  };

  return (
    <S.Container>
      <S.SortButton
        $isfocused={focus === null}
        onClick={() => handleClick({ id: null, name: "전체" })}
      >
        전체
      </S.SortButton>
      {folderList.map((folder) => (
        <S.SortButton
          key={folder.id}
          $isfocused={focus === folder.id}
          onClick={() => handleClick(folder)}
          value={folder.name}
        >
          {folder.name}
        </S.SortButton>
      ))}
    </S.Container>
  );
};

export default Sort;
