import CategoryAddButton from "./CategoryAddButton";
import CategoryList from "./CategoryList";
function Category({categoryList, selectCategory, allLinkLoad, handleSelectCategory}){
    return (
        <div className="content__category">
        <CategoryList categoryList={categoryList} selectCategory={selectCategory} allLinkLoad={allLinkLoad} handleSelectCategory={handleSelectCategory}/>
        <CategoryAddButton/>
        </div>
    )
}

export default Category;