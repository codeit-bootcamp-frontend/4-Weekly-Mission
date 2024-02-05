import Card from "./Card";
import getTimeDiff from "../utils/getTimeDiff";
import getCoustomDate from "../utils/getCoustomDate";

function Cards({linkList, option}){
    return (
        <div className="content__cards">
            <div
            style={{
                display : linkList.length ? "none" : "block",
            }}
            className="content__blank">저장된 링크가 없습니다</div>
            {linkList.map(link => {
                const {id, createdAt, created_at, imageSource, image_source, description, url} = link;
                const imgSrc = imageSource !== undefined ? imageSource : image_source;
                const linkCreated = createdAt !== undefined ? createdAt : created_at;
                const createDate = new Date(linkCreated);
                const timeDiffText = getTimeDiff(linkCreated);
                const coustomDate = getCoustomDate(createDate);
                return <Card key={id} date={coustomDate} url={url} imgSrc={imgSrc} timeDiff={timeDiffText} 
                content={description} option={option}></Card>
            })}
        </div>
    )
}

export default Cards;