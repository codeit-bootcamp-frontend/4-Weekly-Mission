import Category from './Category';
import SubTitle from './SubTitle';

const CategoryTabList = ({
  categoryDatas,
  currentCategory,
  handleCategoryButton,
  categoryId,
}) => {
  return (
    <>
      <Category
        categoryDatas={categoryDatas}
        currentCategory={currentCategory}
        handleCategoryButton={handleCategoryButton}
      />
      <SubTitle currentCategory={currentCategory} categoryId={categoryId} />
    </>
  );
};

export default CategoryTabList;
