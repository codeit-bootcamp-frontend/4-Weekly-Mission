import DefalutCardImg from "../assets/default-card-img.svg";
import StarImg from "../assets/star.svg";
import KebabImg from "../assets/kebab.svg";
function CardListItem({id, url, imgSrc, timeDiff, content, date, option, handleKebab, kebabStatus}){
    return (
        <a href={url} className="content__card" >
            {option && <img className="content__star" src={StarImg} alt="별 아이콘"/>}
            <figure 
            style={{
                background: !imgSrc ? `#DDDFFF url(${DefalutCardImg}) no-repeat center` : "#fff"
            }}
             className="content__imgBox">
                <img
                style={{
                    display: !imgSrc ? "none": "block",
                }}
                 className="content__img" src={imgSrc} alt="카드 이미지"/>
            </figure>
            <div className="content__info">
                {option ? 
                <div className="content__box">
                     <div className="content__timediff">{timeDiff}</div>
                     <img
                     onClick={(e) => {
                        e.preventDefault();
                        handleKebab(id);
                     } }
                      className="content__kebab" src={KebabImg} alt="케밥 아이콘"/>
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
                <div className="content__timediff">{timeDiff}</div>}
                <div className="content__text">{content}</div>
                <div className="content__date">{`${date.year}. ${date.month}. ${date.date}`}</div>
            </div>
        </a>
    )
}

export default CardListItem;