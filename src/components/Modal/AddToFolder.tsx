import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./addToFolder.module.scss";
import checkIcon from "../../image/check.svg";

interface Category {
  id: number;
  name: string;
  link?: { count: number };
}

interface AddToFolderProps {
  isOpen: boolean;
  onClose: () => void;
  categoryList: Category[];
  link: string;
}

const AddToFolder = ({
  isOpen,
  onClose,
  categoryList,
  link,
}: AddToFolderProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categoryList[0]?.id || null
  );

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalInner}>
        <div className={styles.modalText}>
          <h2 className={styles.modalTitle}>폴더에 추가</h2>
          <p className={styles.link}>{link}</p>
        </div>
        <ul className={styles.category}>
          {categoryList &&
            categoryList.map((category) => (
              <li key={category.id}>
                <button
                  className={`${styles.categoryButton} ${
                    category.id === selectedCategory ? styles.selected : ""
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <p className={styles.name}>{category.name}</p>
                  <p className={styles.count}>
                    {category.link?.count} 개의 링크
                  </p>
                  {category.id === selectedCategory && (
                    <img
                      src={checkIcon}
                      alt="check icon"
                      className={styles.checkIcon}
                    />
                  )}
                </button>
              </li>
            ))}
        </ul>
        <button className={styles.modalButton}>추가하기</button>
      </div>
    </Modal>
  );
};

export default AddToFolder;
