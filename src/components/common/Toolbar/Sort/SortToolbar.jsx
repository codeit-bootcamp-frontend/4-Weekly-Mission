import { useEffect, useState } from "react";
import { BASED_URL } from "../../../../constnats/constant";
import * as S from "./SortToolbarStyle";

const Sort = ({ onChange }) => {
  const [folderList, setFolderList] = useState([]);
  const [focus, setFocus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASED_URL}/users/1/folders`);
        const responseData = await response.json();
        const folderList = responseData.data;
        setFolderList(folderList);
      } catch (error) {
        console.error("error");
      }
    };
    fetchData();
  }, []);

  const handleClick = (title) => {
    onChange(title, folderList);
    setFocus(title.id);
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
