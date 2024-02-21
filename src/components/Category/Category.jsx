import AddIcon from '../../assets/category-add.svg';
import ShareIcon from '../../assets/category-share.svg';
import ModifyIcon from '../../assets/category-modify.svg';
import DeleteIcon from '../../assets/category-delete.svg';
import * as Styled from './Category.styled';

const categoryControlList = [
  {
    img: ShareIcon,
    actionText: '폴더 공유',
    text: '공유',
  },
  {
    img: ModifyIcon,
    actionText: '폴더 이름 변경',
    text: '수정',
  },
  {
    img: DeleteIcon,
    actionText: '폴더 삭제',
    text: '삭제',
  },
];

function Category({ categoryList, selectCategory, allLinkLoad, handleSelectCategory, handleModalAction }) {
  const isControlVisible = selectCategory.name !== '전체';
  return (
    <>
      <Styled.Category>
        <Styled.CategoryBox>
          {categoryList.map((category) => {
            const isSelect = selectCategory.id === category.id; // 현재 선택된 카테고리 ID와 카테고리 ID가 맞다면 true
            return (
              <Styled.CategoryList
                $isSelect={isSelect}
                key={category.id}
                onClick={() => (category.id === 0 ? allLinkLoad() : handleSelectCategory(category.id, category.name))}
              >
                {category.name}
              </Styled.CategoryList>
            );
          })}
        </Styled.CategoryBox>
        <Styled.CategoryAddButton onClick={() => handleModalAction('폴더 추가')}>
          <Styled.CategoryAddText>폴더 추가</Styled.CategoryAddText>
          <Styled.CategoryAddImg src={AddIcon} alt='폴더 추가 아이콘' />
        </Styled.CategoryAddButton>
      </Styled.Category>

      <Styled.CategoryTitleBox>
        <Styled.CategoryTitle>{selectCategory.name}</Styled.CategoryTitle>
        {isControlVisible && (
          <Styled.CategoryControlList>
            {categoryControlList.map((list, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => {
                    const url = `${window.location.origin}/shared/${selectCategory.id}`;
                    handleModalAction(list.actionText, selectCategory.name, url);
                  }}
                >
                  <Styled.CategoryControlImg src={list.img} alt={`${list.text} 이미지`} />
                  <Styled.CategoryControlText>{list.text}</Styled.CategoryControlText>
                </li>
              );
            })}
          </Styled.CategoryControlList>
        )}
      </Styled.CategoryTitleBox>
    </>
  );
}

export default Category;
