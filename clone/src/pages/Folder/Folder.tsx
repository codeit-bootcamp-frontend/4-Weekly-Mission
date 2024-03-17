import { AddLinkBar } from "pages/Shared/components/AddLinkBar/AddLinkBar";
import "./Folder.css";
import { SearchBar } from "pages/components/SearchBar";
import { FolderContent } from "pages/Folder/components/FolderContent/FolderContent";
import { useEffect, useState } from "react";
import { getCategory } from "data-access/getCategory";

export const Folder = () => {
  const [data, setData] = useState();

  const handleLoadCategory = async () => {
    const { data } = await getCategory();
    setData(data);
    console.log(data);
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
