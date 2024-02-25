import { useState, useEffect } from 'react';

// eslint-disable-next-line import/order
import { getFolderLink } from '../api/BaseUrl';

import '../styles/CategoryList.css';

import iconDelete from '../assets/logo/icon-delete.svg';
import iconPen from '../assets/logo/icon-pen.svg';
import iconShare from '../assets/logo/icon-share.svg';
import iconPlus from '../assets/logo/plus.svg';

import CardList from './CardList';
import Category from './Category';

const CategoryList = ({ folderInfo, categoryList }) => {
  const [selected, setSelected] = useState({ id: '', name: '전체' });
  const [folderLink, setFolderLink] = useState(null);

  const handleLoad = async categoryId => {
    try {
      const state = await getFolderLink(categoryId);
      setFolderLink(state.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(categoryList);
  useEffect(() => {
    handleLoad(selected.id);
  }, [selected.id]);

  console.log(folderInfo); //폴더로 정의되는 카드 사이트
  console.log(folderLink); //안뜸
  console.log(categoryList); // 카테고리 리스트
  console.log(selected);

  return (
    <>
      <div className='category-list'>
        <div className='category-list-container'>
          <a className={`category ${selected.name === '전체' ? 'category-selected' : ''}`} onClick={() => setSelected({ id: '', name: '전체' })}>
            전체
          </a>
          {categoryList?.data ? (
            <>
              {categoryList.data.map(category => (
                <Category key={category.id} folder={category} onClickFolder={setSelected} isSelected={selected && selected.id === category.id} />
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
        <h2 className='folder-name'>{selected.name}</h2>
        {selected.name !== '전체' ? (
          <>
            <div className='folder-menu'>
              <img className='folder-menu-icon' src={iconShare} alt='폴더 공유하기.' />
              <a className='folder-menu-text'>공유</a>
              <img className='folder-menu-icon' src={iconPen} alt='폴더 이름 변경하기.' />
              <a className='folder-menu-text'>이름 변경</a>
              <img className='folder-menu-icon' src={iconDelete} alt='폴더 삭제하기.' />
              <a className='folder-menu-text'>삭제</a>
            </div>
          </>
        ) : null}
      </div>
      <CardList folderInfo={folderInfo} isIconVisible={false} />
    </>
  );
};

export default CategoryList;
