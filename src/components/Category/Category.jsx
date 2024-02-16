import AddImg from '../../assets/category-add.svg';

function Category({ categoryList, selectCategory, allLinkLoad, handleSelectCategory, handleModalAction }) {
  return (
    <div className='content__category'>
      <ul className='category__box'>
        {categoryList.map((category) => {
          const isSelect = selectCategory.id === category.id; // 현재 선택된 카테고리 ID와 카테고리 ID가 맞다면 true
          return (
            <li
              key={category.id}
              onClick={() => (category.id === 0 ? allLinkLoad() : handleSelectCategory(category.id, category.name))}
              className={`category__list ${isSelect ? 'category__select' : ''}`}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
      <div className='category__add' onClick={() => handleModalAction('폴더 추가')}>
        <span className='category__addText'>폴더 추가</span>
        <img className='category__addImg' src={AddImg} alt='폴더 추가 아이콘' />
      </div>
    </div>
  );
}

export default Category;
