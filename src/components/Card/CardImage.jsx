import DefalutCardImg from "../../assets/default-card-img.svg";
function CardImage({imgSrc}){
    return (
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
    )
}

export default CardImage;