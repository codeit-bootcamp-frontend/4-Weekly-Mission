function CategoryListItem({isSelect, id, allLinkLoad, handleSelectCategory, name}){
    return(
        <li onClick={
            () => id === 0 ? allLinkLoad() : handleSelectCategory(id, name)} 
            style={{
                backgroundColor: isSelect ? "#6D6AFE" : "#FFFFFF",
                color: isSelect ? "#FFFFFF" : "#000000",
            }} className="category__list">{name}</li>
    )
}

export default CategoryListItem;