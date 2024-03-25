import React, { useEffect, useState } from "react";
import "./Cardgrid.scss";
import defaultImage from "../../image/no_image.svg";
import defaultStar from "../../image/state=Default.svg";
import kebab from "../../image/kebab.svg";
import DeleteLink from "../Modal/DeleteLink";
import AddToFolder from "../Modal/AddToFolder";
import { getFolders } from "../../api";

const CardGrid = ({ formattedCards }) => {
  const [toggleKebab, setToggleKebab] = useState(null);
  const [showDeleteLinkModal, setShowDeleteLinkModal] = useState(false);
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  const [folders, setFolders] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState("");

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await getFolders();
        setFolders(response.data);
      } catch (error) {
        console.error("폴더 데이터 불러오기 실패: ", error);
      }
    };
    fetchFolders();
  }, []);

  const handleKebabClick = (index) => {
    setToggleKebab(index === toggleKebab ? null : index);
  };

  const hideKebab = (event) => {
    if (!event.target.closest(".kebab-menu")) {
      setToggleKebab(null);
    }
  };

  const openDeleteLinkModal = (url) => {
    setShowDeleteLinkModal(true);
    setSelectedUrl(url);
  };

  const closeDeleteLinkModal = () => {
    setShowDeleteLinkModal(false);
  };

  const openAddFolderModal = (url) => {
    setShowAddFolderModal(true);
    setSelectedUrl(url);
  };

  const closeAddFolderModal = () => {
    setShowAddFolderModal(false);
  };

  React.useEffect(() => {
    document.addEventListener("click", hideKebab);

    return () => {
      document.removeEventListener("click", hideKebab);
    };
  }, []);

  return (
    <div className="main">
      <div className="card-grid">
        {formattedCards.map((card, index) => (
          <div className="card" key={card.id}>
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              <div className="star-image">
                <img src={defaultStar} alt="별" />
              </div>
              <div className="card-img">
                <img
                  src={card.imageSource || card.image_source || defaultImage}
                  alt={card.title}
                />
              </div>
              <div className="text-and-menu">
                <div className="text-area">
                  <span className="timeAgo">{card.timeAgo}</span>
                  <p>{card.description}</p>
                  <span className="createdAt">{card.formattedCreatedAt}</span>
                </div>
              </div>
            </a>
            <div className="kebab-menu">
              <button
                className="kebab-menu-icon"
                onClick={() => handleKebabClick(index)}
              >
                <img className="kebab-img" src={kebab} alt="메뉴" />
                {toggleKebab === index && (
                  <div className="kebab-list">
                    <ul>
                      <li onClick={() => openDeleteLinkModal(card.url)}>
                        삭제하기
                      </li>
                      <li onClick={() => openAddFolderModal(card.url)}>
                        폴더에 추가
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <DeleteLink
        isOpen={showDeleteLinkModal}
        onClose={closeDeleteLinkModal}
        selectedUrl={selectedUrl}
      />
      <AddToFolder
        isOpen={showAddFolderModal}
        onClose={closeAddFolderModal}
        link={selectedUrl}
        categoryList={folders}
      />
    </div>
  );
};

export default CardGrid;
