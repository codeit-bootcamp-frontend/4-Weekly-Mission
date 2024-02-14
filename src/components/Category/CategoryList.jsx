import CategoryListItem from './CategoryListItem';
function CategoryList({ categoryList, selectCategory, allLinkLoad, handleSelectCategory }) {
  return (
    <ul className='category__box'>
      {categoryList.map((category) => {
        const isSelect = selectCategory.id === category.id; // 현재 선택된 카테고리 ID와 카테고리 ID가 맞다면 true
        const categoryListItemProps = {
          isSelect, // 현재 선택되어 있는지
          id: category.id, // 카테고리 ID
          allLinkLoad, // 가지고 있는 전체 링크 로드 함수
          handleSelectCategory, // 카테고리에 마다 가지고 있는 링크 로드 함수(매개변수 - 카테고리ID)
          name: category.name, // 카테고리 이름
        };
        return <CategoryListItem key={category.id} {...categoryListItemProps} />;
      })}
    </ul>
  );
}

export default CategoryList;
