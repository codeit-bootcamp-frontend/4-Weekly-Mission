import React, { useState } from "react";
import "./index.scss";
import AddFolder from "../../Modal/AddFolder";
import { FoldersData } from "../../../types/interface";

interface LinkCategoryProps {
  categoryList: FoldersData[] | undefined;
  currentCategory: string;
  onClick: (category: string) => void;
}

const LinkCategory = ({
  categoryList,
  currentCategory,
  onClick,
}: LinkCategoryProps) => {
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);

  const openAddFolderModal = () => {
    setShowAddFolderModal(true);
  };

  const closeAddFolderModal = () => {
    setShowAddFolderModal(false);
  };

  return (
    <div className="category-bar">
      <ul className="category-list">
        <li>
          <button
            className={`category-btn ${
              currentCategory === "전체" ? "active" : ""
            }`}
            onClick={() => onClick("전체")}
          >
            전체
          </button>
        </li>
        {categoryList &&
          categoryList.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                className={`category-btn ${
                  currentCategory === category.name ? "active" : ""
                }`}
                onClick={() => onClick(category.name)}
              >
                {category.name}
              </button>
            </li>
          ))}
      </ul>
      <button className="add-folder-btn" onClick={openAddFolderModal}>
        폴더 추가 +
      </button>
      <AddFolder isOpen={showAddFolderModal} onClose={closeAddFolderModal} />
    </div>
  );
};

export default LinkCategory;
