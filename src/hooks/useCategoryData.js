import { useState, useEffect } from 'react';
import { categoryDataAPI, categoryFolderDataAPI } from '../api/BootcampAPI';
import { useSearchParams } from 'react-router-dom';
export const useCategoryData = () => {
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [category, setCategory] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [folder, setFolder] = useState(null);

  const getCategoryFolder = async (categoryID) => {
    const Data = await categoryFolderDataAPI(categoryID);
    setFolder(Data);
  };

  useEffect(() => {
    const getCategory = async () => {
      const Data = await categoryDataAPI();
      setCategory([{ name: '전체', id: '0' }, ...Data]);
    };
    getCategory();
    setSearchParams({ folderID: '0' });
    getCategoryFolder('0');
  }, []);

  const handleCategoryButton = (e) => {
    setCurrentCategory(e.target.innerText);
    setSearchParams({ folderId: e.target.id });
    getCategoryFolder(e.target.id);
  };

  return {
    category,
    currentCategory,
    handleCategoryButton,
    searchParams,
    folder,
  };
};
