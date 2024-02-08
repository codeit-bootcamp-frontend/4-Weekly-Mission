import UtilListItem from "./UtilListItem";

function UtilList({selectCategory}){
    return (
        <ul 
        style={{
            display: selectCategory.name === "전체" ? "none" : "flex",
        }}
        className="content__util">
            <UtilListItem value="share" text="공유"/>
            <UtilListItem value="modify" text="수정"/>
            <UtilListItem value="delete" text="삭제"/>
        </ul>
    )
}

export default UtilList;