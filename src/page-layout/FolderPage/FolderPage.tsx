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
import {
  useState,
  useRef,
  useEffect,
  ChangeEventHandler,
  MouseEventHandler,
} from "react";

export const FolderPage: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState("전체");
  const [folderId, setFolderId] = useState("0");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [isAddLinkShown, setIsAddLinkShown] = useState(true);
  const [isFooterShown, setIsFooterShown] = useState(false);

  const addLinkRef = useRef(null);
  const footerRef = useRef(null);
  const isAddLinkFixed = !isAddLinkShown && !isFooterShown;

  const { data: linkData } = useGetLink();
  const { folderData } = useGetFolderByLink(folderId);
  const links = folderData?.data;

  const linkDataWithAll = Array.isArray(linkData)
    ? [{ name: "전체", id: "0" }, ...linkData]
    : [];
  const navFixed = true;

  const handleCategoryClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const eventTarget = e.target as HTMLElement;
    const category = eventTarget.innerText;
    const Id = eventTarget.getAttribute("data-id");
    setCurrentCategory(category);
    setFolderId(Id);
  };
  const handleModalClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const eventTarget = e.target as HTMLElement;
    e.preventDefault();
    setIsModalOpen(true);
    setModal(e.currentTarget.id);
    setCurrentUrl(eventTarget.getAttribute("data-url"));
  };
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleInputClear = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    const addLinkObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAddLinkShown(entry.isIntersecting);
      },
      { threshold: 0 },
    );
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFooterShown(entry.isIntersecting);
      },
      { threshold: 0 },
    );
    if (addLinkRef.current) {
      addLinkObserver.observe(addLinkRef.current);
    }
    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }

    return () => {
      if (addLinkRef.current) {
        addLinkObserver.unobserve(addLinkRef.current);
      }
      if (footerRef.current) {
        footerObserver.unobserve(footerRef.current);
      }
    };
  }, []);

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
      <Layout isNavFixed={navFixed} footerRef={footerRef}>
        <div className="FolderPage">
          <AddLink addLinkRef={addLinkRef} />
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
            />
            <EditLink
              currentCategory={currentCategory}
              handleEditClick={handleModalClick}
            />
            {filteredLinks && filteredLinks.length > 0 ? (
              <CardList>
                {filteredLinks?.map((link) => (
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
            {isAddLinkFixed && <AddLink isAddLinkFixed={isAddLinkFixed} />}
          </div>
        </div>
      </Layout>
    </>
  );
};
