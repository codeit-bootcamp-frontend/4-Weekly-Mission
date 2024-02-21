const LinkCategory = ({ categoryList, onClick }) => {
  return (
    <div className="category-bar">
      <ul className="category-list">
        <li>
          <button className="category-btn" onClick={() => onClick("전체")}>
            전체
          </button>
        </li>
        {categoryList &&
          categoryList.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                className="category-btn"
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
