import { CategoryButton } from "ui/CategoryButton";
import "./Category.css";

export const Category = ({ buttonClicked }) => {
  return (
    <div className="Category-wrapper">
      <div className="Categories">
        <CategoryButton buttonClicked={buttonClicked}>전체</CategoryButton>
        <CategoryButton buttonClicked={buttonClicked}>즐겨찾기</CategoryButton>
      </div>
    </div>
  );
};
