import '../styles/Category.css';

const Category = ({ category, onClickCategory, isSelected }) => {
  console.log(category, onClickCategory, isSelected);
  const { id, name } = category;
  return (
    <a className={`Category ${isSelected ? 'Category-selected' : ''}`} onClick={() => onClickCategory({ id, name })}>
      {name}
    </a>
  );
};

export default Category;
