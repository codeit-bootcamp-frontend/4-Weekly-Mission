import CardList from '../card/CardList';
import ContentHeader from './ContentHeader';
import Category from '../category/Category';

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
    <section className='content'>
      <form>
        <label htmlFor="content--search" className='label--hidden'>링크 검색</label>
        <input id='content--search' className='content__search' type='search' placeholder='🔍   링크를 검색해 보세요.' />
      </form>
      {option && <>
       <Category {...categoryProps} /> 
      <ContentHeader selectCategory={selectCategory} handleModalAction={handleModalAction} />
      </>}
      <CardList
        handleKebabClick={handleKebabClick}
        selectCardId={selectCardId}
        linkList={linkList}
        option={option}
        handleModalAction={handleModalAction}
      />
    </section>
  );
}

export default Content;
