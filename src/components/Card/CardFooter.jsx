function CardFooter({date}){
    return <div className="content__date">{`${date.year}. ${date.month}. ${date.date}`}</div>
}

export default CardFooter;