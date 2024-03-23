import AddLink from "ui/AddLink/AddLink";
import Layout from "feature/Layout/Layout";
import SearchBar from "ui/SearchBar/SearchBar";
import { CardList } from "ui/CardList/CardList";
import { Card } from "ui/Card/Card";
import { useGetLink } from "hooks/useGetLink";
import { useGetFolderByLink } from "hooks/useGetFolderByLink";
import Category from "ui/Category/Category";
import { EditLink } from "ui/EditLink/EditLink";
import Modal from "ui/Modal/Modal";

import "./FolderPage.css";
import { MouseEvent, useState } from "react";

export const FolderPage: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState("전체");
  const [folderId, setFolderId] = useState("0");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: linkData } = useGetLink();
  const { folderData } = useGetFolderByLink(folderId);
  const links = folderData?.data;

  const linkDataWithAll = Array.isArray(linkData)
    ? [{ name: "전체", id: "0" }, ...linkData]
    : [];
  const navFixed = true;

  const handleCategoryClick = (e: MouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    const category = eventTarget.innerText;
    const Id = eventTarget.getAttribute("data-id");
    setCurrentCategory(category);
    setFolderId(Id);
  };
  const handleModalClick = (e: MouseEvent, url?: string) => {
    const eventTarget = e.target as HTMLElement;
    e.preventDefault();
    setIsModalOpen(true);
    setModal(e.currentTarget.id);
    setCurrentUrl(url);
    setCurrentUrl(eventTarget.getAttribute("data-url"));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleInputClear = (e: React.MouseEvent<HTMLElement>) => {
    setSearchTerm("");
  };

  const filteredLinks = links?.filter(
    (link) =>
      link.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.url.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      {isModalOpen && (
        <Modal
          currentCategory={currentCategory}
          modal={modal}
          setIsModalOpen={setIsModalOpen}
          categoryData={linkData}
          currentUrl={currentUrl}
          selectedId={+folderId}
        />
      )}
      <Layout isNavFixed={navFixed}>
        <div className="FolderPage">
          <AddLink />
          <div className="FolderPage-items">
            <SearchBar
              handleInputChange={handleInputChange}
              handleInputClear={handleInputClear}
              searchTerm={searchTerm}
            />
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
            {filteredLinks && filteredLinks.length > 0 ? (
              <CardList>
                {filteredLinks?.map((link: any) => (
                  <Card
                    key={link?.id}
                    {...link}
                    handleModalClick={handleModalClick}
                  />
                ))}
              </CardList>
            ) : (
              <div className="NoLink">저장된 링크가 없습니다.</div>
            )}
            <button className="mobile-add-button">폴더 추가하기 +</button>
          </div>
        </div>
      </Layout>
    </>
  );
};
