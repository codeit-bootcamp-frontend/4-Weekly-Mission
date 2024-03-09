import { useEffect, useState } from "react";
import { BASED_URL } from "../../../../constnats/constant";
import * as S from "./SortToolbarStyle";

const Sort = ({ onChange }) => {
  const [folderList, setFolderList] = useState([]);

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

  const handleOnclick = (title) => {
    onChange(title);
  };

  return (
    <S.Container>
      <S.SortButton onClick={() => handleOnclick({ id: null, name: "전체" })}>
        전체
      </S.SortButton>
      {folderList.map((folder) => (
        <S.SortButton
          key={folder.id}
          onClick={() => handleOnclick(folder)}
          value={folder.name}
        >
          {folder.name}
        </S.SortButton>
      ))}
    </S.Container>
  );
};

export default Sort;
