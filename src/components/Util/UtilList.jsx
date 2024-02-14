import UtilListItem from "./UtilListItem";

function UtilList({selectCategory, setModalAction}){
    const handleModalAction = (action, name) => {
        setModalAction({
            isView: true,
            action,
            subTitle: name,
        })
    }
    return (
        <ul 
        style={{
            display: selectCategory.name === "전체" ? "none" : "flex",
        }}
        className="content__util">
            <UtilListItem value="share" text="공유" onClick={handleModalAction} selectCategory={selectCategory}/>
            <UtilListItem value="modify" text="수정" onClick={handleModalAction}/>
            <UtilListItem value="delete" text="삭제" onClick={handleModalAction} selectCategory={selectCategory}/>
        </ul>
    )
}

export default UtilList;