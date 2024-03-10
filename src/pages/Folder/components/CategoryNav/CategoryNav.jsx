import { useLocation } from "react-router-dom";
import "./CategoryNav.css";
import { CategoryNavButtons } from "./CategoryNavButtons/CategoryNavButtons";

export function CategoryNav({ activeCategoryName, copyLink }) {
  const location = useLocation();
  function shareFacebook() {
    const callURL = "http://localhost:3000" + location.pathname;
    console.log(callURL);
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + callURL);
  }

  return (
    <div className="category-nav-bar">
      <p className="active-category">{activeCategoryName}</p>
      <nav className="category-nav-buttons">
        {activeCategoryName !== "전체" && (
          <CategoryNavButtons
            copyLink={copyLink}
            selectFolder={activeCategoryName}
            onClick={shareFacebook}
          />
        )}
      </nav>
    </div>
  );
}
