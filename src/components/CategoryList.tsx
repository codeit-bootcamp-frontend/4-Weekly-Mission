import { useState, useEffect } from 'react';
import React from 'react';

// eslint-disable-next-line import/order
import { getFolderLink } from '../api/BaseUrl';

import '../styles/CategoryList.css';

import iconDelete from '../assets/logo/icon-delete.svg';
import iconPen from '../assets/logo/icon-pen.svg';
import iconShare from '../assets/logo/icon-share.svg';
import iconPlus from '../assets/logo/plus.svg';

import CardList from './CardList';
import Category from './Category';

interface Props {
  folderInfo: any;
  categoryList: any;
  isIconVisible: boolean;
}

const CategoryList = ({ folderInfo, categoryList, isIconVisible }: Props) => {
  const [selected, setSelected] = useState({ id: '', name: '전체' });
  const [folderLink, setFolderLink] = useState(null);

  const categoryData = categoryList?.data;

  const handleLoad = async (categoryId: string) => {
    try {
      const state = await getFolderLink(categoryId);
      setFolderLink(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad(selected.id);
  }, [selected.id]);

  return (
    <>
      <div className='category-list'>
        <div className='category-list-container'>
          <a className={`category ${selected.name === '전체' ? 'category-selected' : ''}`} onClick={() => setSelected({ id: '', name: '전체' })}>
            전체
          </a>
          {categoryData ? (
            <>
              {categoryData?.map((category: any) => (
                <Category key={category.id} category={category} onClickCategory={setSelected} isSelected={selected && selected.id === category.id} />
              ))}
            </>
          ) : null}
        </div>
        <div className='add-category-container'>
          <a className='add-category'>폴더 추가</a>
          <img className='add-category-icon' src={iconPlus} alt='폴더 추가하기.' />
        </div>
      </div>

      <div className='category-title'>
        <h2 className='category-name'>{selected.name}</h2>
        {selected.name !== '전체' ? (
          <>
            <div className='category-menu'>
              <img className='category-menu-icon' src={iconShare} alt='폴더 공유하기.' />
              <a className='category-menu-text'>공유</a>
              <img className='category-menu-icon' src={iconPen} alt='폴더 이름 변경하기.' />
              <a className='category-menu-text'>이름 변경</a>
              <img className='category-menu-icon' src={iconDelete} alt='폴더 삭제하기.' />
              <a className='category-menu-text'>삭제</a>
            </div>
          </>
        ) : null}
      </div>
      <CardList folderLink={folderLink} folderInfo={folderInfo} isIconVisible={true} />
    </>
  );
};

export default CategoryList;
