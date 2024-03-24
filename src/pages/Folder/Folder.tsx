import { AddLinkBar } from "../Shared/components/AddLinkBar/AddLinkBar";
import "./Folder.css";
// import { SearchBar } from "../components/SearchBar";
import { FolderContent } from "./components/FolderContent/FolderContent";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { getCategory } from "../../data-access/getCategory";
import { FolderListDataForm } from "interface/DataForm";
import { SearchBar } from "@pages/components/SearchBar";

export const Folder = () => {
  const [data, setData] = useState<FolderListDataForm[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchKeyWord, setSearchKeyWord] = useState("");

  // const handleInputEmpty = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  // const handleInputClean = () => {
  //   setInputValue("");
  // };

  const handleLoadCategory = async () => {
    const { data } = await getCategory<{ data: FolderListDataForm[] }>();
    setData(data);
  };

  // const handleSearchCard = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     setSearchKeyWord(inputValue);
  //   }
  // };

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
