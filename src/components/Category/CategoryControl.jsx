import CategoryControlItem from './CategoryControlItem';

function CategoryControl({ selectCategory, setModalAction }) {
  const handleModalAction = (action) => {
    setModalAction({
      isView: true,
      action,
      subTitle: selectCategory.name,
    });
  };
  return (
    <ul className='content__util'>
      <CategoryControlItem value='폴더 공유' text='공유' handleModalAction={handleModalAction}/>
      <CategoryControlItem value='폴더 이름 변경' text='수정' handleModalAction={handleModalAction}/>
      <CategoryControlItem value='폴더 삭제' text='삭제' handleModalAction={handleModalAction}/>
    </ul>
  );
}

export default CategoryControl;
