import React from 'react';

interface Category {
  id: string;
  name: string;
  link: {
    count: number;
  };
}

export interface CategoryContextType {
  data: Category[];
}

const CategoryContext = React.createContext<CategoryContextType | undefined>(
  undefined,
);

export default CategoryContext;
