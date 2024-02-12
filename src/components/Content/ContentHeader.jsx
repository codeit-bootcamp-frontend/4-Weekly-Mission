import UtilList from "../util/UtilList";
function ContentHeader({selectCategory, setModalAction}){
    return (
        <div className="content__header">
            <p className="content__title">{selectCategory.name}</p>
            <UtilList selectCategory={selectCategory} setModalAction={setModalAction}/>
        </div> 
    )
}

export default ContentHeader;