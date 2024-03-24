import '../styles/Category.css';
import React from 'react';

interface Props {
  category: {
    id: string;
    name: string;
  };
  onClickCategory: (arg0: object) => void;
  isSelected: boolean;
}

const Category = ({ category, onClickCategory, isSelected }: Props) => {
  const { id, name } = category;
  return (
    <a className={`Category ${isSelected ? 'Category-selected' : ''}`} onClick={() => onClickCategory({ id, name })}>
      {name}
    </a>
  );
};

export default Category;
