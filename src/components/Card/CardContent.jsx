import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardFooter from "./CardFooter";
function CardContent({url, id, timeDiff, description, date, handleKebab, kebabStatus, option, setModalAction}){
    const cardHeaderProps = {
        url,
        id,
        timeDiff,
        handleKebab,
        kebabStatus,
        option,
        setModalAction
    }
    return(
        <div className="content__info">
            <CardHeader {...cardHeaderProps}/>
            <CardDescription description={description}/>
            <CardFooter date={date}/>
        </div>
    )
}
export default CardContent;