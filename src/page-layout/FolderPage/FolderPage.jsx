import { AddLink } from "ui/AddLink";
import { Layout } from "feature/Layout";
import { SearchBar } from "ui/SearchBar";
import { CardList } from "ui/CardList";
import { Card } from "ui/Card";
import { useGetLink } from "hooks/useGetLink";
import { useGetFolderByLink } from "hooks/useGetFolderByLink";
import { Category } from "ui/Category";
import { EditLink } from "ui/EditLink";
import Modal from "Modal/Modal";

import "./FolderPage.css";
import { useState } from "react";
import { NoLink } from "ui/NoLink/NoLink";

export const FolderPage = () => {
  const [currentCategory, setCurrentCategory] = useState("전체");
  const [folderId, setFolderId] = useState("0");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [currentUrl, setCurrentUrl] = useState("");

  const { data: linkData } = useGetLink();
  const { folderData } = useGetFolderByLink(folderId);
  const links = folderData?.data;

  const linkDataWithAll = Array.isArray(linkData)
    ? [{ name: "전체", id: "0" }, ...linkData]
    : [];
  const navFixed = true;

  const handleCategoryClick = (e) => {
    const category = e.target.innerText;
    const Id = e.target.getAttribute("data-id");
    setCurrentCategory(category);
    setFolderId(Id);
  };
  const handleModalClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setModal(e.currentTarget.id);
    setCurrentUrl(e.target.getAttribute("url"));
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          currentCategory={currentCategory}
          modal={modal}
          setIsModalOpen={setIsModalOpen}
          categoryData={linkData}
          currentUrl={currentUrl}
        />
      )}
      <Layout isNavFixed={navFixed}>
        <div className="FolderPage">
          <AddLink />
          <div className="FolderPage-items">
            <SearchBar />
            <Category
              buttonClicked={handleCategoryClick}
              linkData={linkDataWithAll}
              currentCategory={currentCategory}
              handleModalClick={handleModalClick}
              handleEditClick={handleModalClick}
            />
            <EditLink
              currentCategory={currentCategory}
              handleEditClick={handleModalClick}
            />
            {links ? (
              <CardList>
                {links?.map((link) => (
                  <Card
                    key={link?.id}
                    {...link}
                    handleModalClick={handleModalClick}
                  />
                ))}
              </CardList>
            ) : (
              <NoLink>저장된 링크가 없습니다.</NoLink>
            )}
            <button className="mobile-add-button">폴더 추가하기 +</button>
          </div>
        </div>
      </Layout>
    </>
  );
};
