import { useState } from 'react';

import '../styles/CategoryList.css';

import iconDelete from '../assets/logo/icon-delete.svg';
import iconPen from '../assets/logo/icon-pen.svg';
import iconShare from '../assets/logo/icon-share.svg';
import iconPlus from '../assets/logo/plus.svg';

import Category from './Category';

const CategoryList = ({ categoryList }) => {
  const [selected, setSelected] = useState({ id: '', name: '전체' });

  return (
    <>
      <div className='category-list'>
        <div className='category-list-container'>
          <a className={`category ${selected.name === '전체' ? 'category-selected' : ''}`} onClick={() => setSelected({ id: '', name: '전체' })}>
            전체
          </a>
          {categoryList ? (
            <>
              {categoryList.map(category => (
                <Category key={folder.id} folder={folder} onClickFolder={setSelected} isSelected={selected && selected.id === folder.id} />
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
        <h2 className='category-name'>폴더 이름</h2>
        <div className='category-box'>
          <div className='category-menu'>
            <img className='category-menu-icon' src={iconShare} alt='폴더 공유하기.' />
            <a className='category-menu-text'>공유</a>
          </div>
          <div className='category-menu'>
            <img className='category-menu-icon' src={iconPen} alt='폴더 이름 변경하기.' />
            <a className='category-menu-text'>이름 변경</a>
          </div>
          <div className='category-menu'>
            <img className='category-menu-icon' src={iconDelete} alt='폴더 삭제하기.' />
            <a className='category-menu-text'>삭제</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
