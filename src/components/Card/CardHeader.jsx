import KebabIcon from "../../assets/kebab.svg";
function CardHeader({url, option, id, timeDiff, kebabStatus, handleKebab, setModalAction}){
   const handleModalAction = (action, e) => {
      e.preventDefault();
      setModalAction({
         isView: true,
         action,
         subTitle: url,
      })
   }
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
                    <li onClick={(e) => handleModalAction("링크 삭제", e)} className="kebab__list">삭제하기</li>
                    <li onClick={(e) => handleModalAction("폴더에 추가", e)} className="kebab__list">폴더에 추가</li>
                 </ul>
            </div>
            :  
            <div className="content__timediff">{timeDiff}</div>
    )
}

export default CardHeader;