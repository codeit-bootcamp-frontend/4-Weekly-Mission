function CategoryListItem({ isSelect, id, allLinkLoad, handleSelectCategory, name }) {
  return (
    <li
      onClick={() => (id === 0 ? allLinkLoad() : handleSelectCategory(id, name))}
      className={`category__list ${isSelect ? "category__select" : ""}`}
    >
      {name}
    </li>
  );
}

export default CategoryListItem;
