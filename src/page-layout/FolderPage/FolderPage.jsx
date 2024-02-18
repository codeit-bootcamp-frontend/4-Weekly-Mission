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
import { NoLink } from "ui/NoLink/NoLink";

export const FolderPage = () => {
  const [currentCategory, setCurrentCategory] = useState("전체");
  const [folderId, setFolderId] = useState("0");

  const { data: linkData } = useGetLink();
  const { folderData } = useGetFolderByLink(folderId);
  const links = folderData?.data;

  const linkDataWithAll = Array.isArray(linkData)
    ? [{ name: "전체", id: "0" }, ...linkData]
    : [];
  const navFixed = true;

  const handleButtonClick = (e) => {
    const category = e.target.innerText;
    const Id = e.target.id;

    setCurrentCategory(category);
    setFolderId(Id);
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
          {links ? (
            <CardList>
              {links?.map((link) => (
                <EditableCard key={link?.id} {...link} />
              ))}
            </CardList>
          ) : (
            <NoLink>저장된 링크가 없습니다.</NoLink>
          )}
          <button className="mobile-add-button">폴더 추가하기 +</button>
        </div>
      </div>
    </Layout>
  );
};
