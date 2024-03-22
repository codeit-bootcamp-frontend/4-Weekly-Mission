import FolderButton from "components/Button/FolderButton/FolderButton";
import { Link } from "react-router-dom";
import styles from "./category.module.css";
import { ALL } from "utils/constants/strings";
import { GetFolderResponse } from "types/apis";
import { SelectedCategory, ButtonClick } from "pages/FolderPage/FolderPage";

interface Props {
  buttonNames: GetFolderResponse[];
  selectedCategory: SelectedCategory;
  onClick: ButtonClick;
}

function Category({ buttonNames, selectedCategory, onClick }: Props) {
  return (
    <div className={styles.buttons}>
      <Link to={`/folder`}>
        <FolderButton
          ischecked={selectedCategory.name === ALL ? true : false}
          onClick={() => onClick(null, ALL)}
        >
          {ALL}
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
