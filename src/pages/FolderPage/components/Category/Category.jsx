import FolderButton from "components/Button/FolderButton/FolderButton";
import { Link } from "react-router-dom";
import styles from "./category.module.css";

function Category({ buttonNames, selectedCategory, onClick }) {

  return (
    <div className={styles.buttons}>
      <Link to={`/folder`}>
        <FolderButton
          ischecked={selectedCategory.name === "전체" ? true : false}
          onClick={() => onClick(null, "전체")}
        >
          전체
        </FolderButton>
      </Link>
      {buttonNames.map(({ id, name }) => (
        <Link to={`/shared/${id}`} key={id}>
          <FolderButton
            ischecked={selectedCategory.name === name ? true : false}
            onClick={() => onClick(id, name)}
          >
            {name}
          </FolderButton>
        </Link>
      ))}
    </div>
  );
}

export default Category;
