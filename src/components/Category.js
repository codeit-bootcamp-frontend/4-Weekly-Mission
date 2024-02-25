import '../styles/Category.css';

const Category = ({ Category, onClickCategory, isSelected }) => {
  const { id, name } = Category;
  return (
    <a className={`Category ${isSelected ? 'Category-selected' : ''}`} onClick={() => onClickCategory({ id, name })}>
      {name}
    </a>
  );
};

export default Category;
