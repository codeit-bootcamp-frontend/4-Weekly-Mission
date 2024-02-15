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
  setModalAction,
}) {
  const categoryProps = {
    categoryList,
    selectCategory,
    allLinkLoad,
    handleSelectCategory,
    setModalAction,
  };
  return (
    <section className='content'>
      <input className='content__search' type='search' placeholder='🔍   링크를 검색해 보세요.' />
      {option && <>
       <Category {...categoryProps} /> 
      <ContentHeader selectCategory={selectCategory} setModalAction={setModalAction} />
      </>}
      <CardList
        handleKebabClick={handleKebabClick}
        selectCardId={selectCardId}
        linkList={linkList}
        option={option}
        setModalAction={setModalAction}
      />
    </section>
  );
}

export default Content;
