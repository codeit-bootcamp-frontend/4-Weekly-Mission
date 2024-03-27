import { AddLinkBar } from "../shared/components/AddLinkBar/AddLinkBar";
import * as S from "./FolderStyled";
import { FolderContent } from "./components/FolderContent/FolderContent";
import { useEffect, useState } from "react";
import { FolderListDataForm } from "../../types/DataForm";
import { getCategory } from "@data-access/getCategory";
import { SearchBar } from "@components/SearchBar";

export default function Folder() {
  const [data, setData] = useState<FolderListDataForm[]>([]);

  const handleLoadCategory = async () => {
    const { data } = await getCategory<{ data: FolderListDataForm[] }>();
    setData(data);
  };

  useEffect(() => {
    handleLoadCategory();
  }, []);

  return (
    <S.FolderPageContainer>
      <AddLinkBar data={data} />
      <S.ItemsContainer>
        <SearchBar />
        <FolderContent data={data} />
      </S.ItemsContainer>
    </S.FolderPageContainer>
  );
}
