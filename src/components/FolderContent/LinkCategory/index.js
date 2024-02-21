import "./index.scss";

const LinkCategory = ({ categoryList, currentCategory, onClick }) => {
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
      <button className="add-folder-btn">폴더 추가 +</button>
    </div>
  );
};

export default LinkCategory;
