import UtilList from "../Util/UtilList";
function ContentHeader({selectCategory}){
    return (
        <div className="content__header">
        <p className="content__title">{selectCategory.name}</p>
        <UtilList selectCategory={selectCategory}/>
    </div> 
    )
}

export default ContentHeader;