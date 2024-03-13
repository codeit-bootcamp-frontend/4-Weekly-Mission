import "./CategoryNav.css";
import { CategoryNavButtons } from "./CategoryNavButtons/CategoryNavButtons";

export function CategoryNav({ activeCategoryName, copyLink }) {
  return (
    <div className="category-nav-bar">
      <p className="active-category">{activeCategoryName}</p>
      <nav className="category-nav-buttons">
        {activeCategoryName !== "전체" && (
          <CategoryNavButtons
            copyLink={copyLink}
            selectFolder={activeCategoryName}
          />
        )}
      </nav>
    </div>
  );
}
