import CardList from '../card/CardList';
import Category from '../category/Category';
import * as Styled from './Content.styled';

function Content({
  categoryList,
  selectCategory,
  allLinkLoad,
  handleSelectCategory,
  handleKebabClick,
  selectCardId,
  linkList,
  option,
  handleModalAction,
}) {
  const categoryProps = {
    categoryList,
    selectCategory,
    allLinkLoad,
    handleSelectCategory,
    handleModalAction,
  };
  return (
    <Styled.Content>
      <form>
        <Styled.Label htmlFor='content--search'>링크 검색</Styled.Label>
        <Styled.SearchInput id='content--search' type='search' placeholder='🔍  링크를 검색해 보세요.' />
      </form>
      {option && <Category {...categoryProps} />}
      <CardList
        handleKebabClick={handleKebabClick}
        selectCardId={selectCardId}
        linkList={linkList}
        option={option}
        handleModalAction={handleModalAction}
      />
    </Styled.Content>
  );
}

export default Content;
