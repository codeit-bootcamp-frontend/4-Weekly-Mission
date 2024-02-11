import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardFooter from "./CardFooter";
function CardContent({id, timeDiff, description, date, handleKebab, kebabStatus, option}){
    const cardHeaderProps = {
        id,
        timeDiff,
        handleKebab,
        kebabStatus,
        option
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