import { AddLink } from "ui/AddLink";
import { SearchBar } from "ui/SearchBar";
import { CardList } from "ui/CardList";
import { EditableCard } from "ui/EditableCard";
import { useGetFolder } from "data-access/useGetFolder";
import { useGetLink } from "data-access/useGetLink";
import { Category } from "ui/Category";

import "./FolderPage.css";
import { useState } from "react";

export const FolderPage = () => {
  const { data: linkData } = useGetLink();
  const { data } = useGetFolder();
  const { links } = data || {};
  const linkDataWithAll = Array.isArray(linkData)
    ? [{ name: "전체", id: "0" }, ...linkData]
    : [];

  console.log(linkData);

  const [currentCategory, setCurrentCategory] = useState("전체");

  const handleButtonClick = (e) => {
    const category = e.target.innerText;
    setCurrentCategory(category);
  };

  return (
    <div className="FolderPage">
      <AddLink />
      <div className="FolderPage-items">
        <SearchBar />
        <Category
          buttonClicked={handleButtonClick}
          linkData={linkDataWithAll}
          currentCategory={currentCategory}
        />
        <CardList>
          {links?.map((link) => (
            <EditableCard key={link?.id} {...link} />
          ))}
        </CardList>
      </div>
    </div>
  );
};
