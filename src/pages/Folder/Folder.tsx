import { AddLinkBar } from "../Shared/components/AddLinkBar/AddLinkBar";
import "./Folder.css";
import { FolderContent } from "./components/FolderContent/FolderContent";
import { useEffect, useState } from "react";
import { getCategory } from "../../data-access/getCategory";
import { FolderListDataForm } from "interface/DataForm";
import { SearchBar } from "@pages/components/SearchBar";

export const Folder = () => {
  const [data, setData] = useState<FolderListDataForm[]>([]);

  const handleLoadCategory = async () => {
    const { data } = await getCategory<{ data: FolderListDataForm[] }>();
    setData(data);
  };

  useEffect(() => {
    handleLoadCategory();
  }, []);

  return (
    <div className="FolderPage">
      <AddLinkBar data={data} />
      <div className="FolderPage-items">
        <SearchBar />
        <FolderContent data={data} />
      </div>
    </div>
  );
};
