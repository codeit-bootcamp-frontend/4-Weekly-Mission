import { AddLink } from "ui/AddLink";
import { Layout } from "feature/Layout";
import { SearchBar } from "ui/SearchBar";
import { CardList } from "ui/CardList";
import { EditableCard } from "ui/EditableCard";
import { useGetLink } from "data-access/useGetLink";
import { useGetFolderByLink } from "data-access/useGetFolderByLink";
import { Category } from "ui/Category";
import { EditLink } from "ui/EditLink";

import "./FolderPage.css";
import { useState } from "react";

export const FolderPage = () => {
  const { data: linkData } = useGetLink();
  const { folderData } = useGetFolderByLink();
  const links = folderData?.data;

  const [currentCategory, setCurrentCategory] = useState("전체");
  const linkDataWithAll = Array.isArray(linkData)
    ? [{ name: "전체", id: "0" }, ...linkData]
    : [];
  const navFixed = true;

  const handleButtonClick = (e) => {
    const category = e.target.innerText;
    setCurrentCategory(category);
  };

  return (
    <Layout isNavFixed={navFixed}>
      <div className="FolderPage">
        <AddLink />
        <div className="FolderPage-items">
          <SearchBar />
          <Category
            buttonClicked={handleButtonClick}
            linkData={linkDataWithAll}
            currentCategory={currentCategory}
          />
          <EditLink currentCategory={currentCategory} />
          <CardList>
            {links?.map((link) => (
              <EditableCard key={link?.id} {...link} />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};
