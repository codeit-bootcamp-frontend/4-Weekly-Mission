import CategoryControl from '../category/CategoryControl';
function ContentHeader({ selectCategory, setModalAction }) {
  const isControlVisible = selectCategory.name !== "전체";
  return (
    <div className='content__header'>
      <p className='content__title'>{selectCategory.name}</p>
      {isControlVisible && <CategoryControl selectCategory={selectCategory} setModalAction={setModalAction} />}
    </div>
  );
}

export default ContentHeader;
