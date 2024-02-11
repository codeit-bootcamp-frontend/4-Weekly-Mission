import KebabIcon from "../../assets/kebab.svg";
function CardHeader({option, id, timeDiff, kebabStatus, handleKebab}){
    return (
        option ? 
            <div className="content__box">
                 <div className="content__timediff">{timeDiff}</div>
                 <img
                 onClick={(e) => {
                    e.preventDefault();
                    handleKebab(id);
                 }}
                  className="content__kebab" src={KebabIcon} alt="케밥 아이콘"/>
                 <ul 
                 style={{
                    display: kebabStatus === id ? "flex":"none",
                 }}
                 className="kebab__lists">
                    <li className="kebab__list">삭제하기</li>
                    <li className="kebab__list">폴더에 추가</li>
                 </ul>
            </div>
            :  
            <div className="content__timediff">{timeDiff}</div>
    )
}

export default CardHeader;