import FolderButton from "components/Button/FolderButton/FolderButton";
import { Link } from "react-router-dom";
import styles from "./buttonGroup.module.css";

function ButtonGroup({ buttonNames, selectedCategory, setSelectedCategory }) {
  /**
   * 카테코리 버튼을 클릭 시 클릭된 카테고리를 저장합니다.
   * @param {number} categoryId
   * @param {string} categoryName
   */
  const handleButtonClick = (categoryId, categoryName) => {
    setSelectedCategory({ id: categoryId, name: categoryName });
  };

  return (
    <div className={styles.buttons}>
      <Link to={`/folder`}>
        <FolderButton
          ischecked={selectedCategory.name === "전체" ? true : false}
          onClick={() => handleButtonClick(null, "전체")}
        >
          전체
        </FolderButton>
      </Link>
      {buttonNames.map(({ id, name }) => (
        <Link to={`/shared/${id}`} key={id}>
          <FolderButton
            ischecked={selectedCategory.name === name ? true : false}
            onClick={() => handleButtonClick(id, name)}
          >
            {name}
          </FolderButton>
        </Link>
      ))}
    </div>
  );
}

export default ButtonGroup;
