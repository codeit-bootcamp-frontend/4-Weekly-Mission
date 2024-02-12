import CardImage from "./CardImage";
import StarIcon from "./StarIcon";
import CardContent from "./CardContent";
function CardListItem({id, url, imgSrc, timeDiff, description, date, option, handleKebab, kebabStatus, setModalAction}){
    const cardContentProps = {
        url,
        id,
        timeDiff,
        description,
        date,
        handleKebab,
        kebabStatus,
        option,
        setModalAction
    }
    return (
        <a href={url} className="content__card" >
            <StarIcon option={option}/>
            <CardImage imgSrc={imgSrc}/>
           <CardContent {...cardContentProps}/>
        </a>
    )
}

export default CardListItem;