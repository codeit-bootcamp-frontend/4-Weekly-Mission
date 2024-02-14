import StarImg from "../../assets/star.svg";
function StarIcon({option}){
    return option && <img className="content__star" src={StarImg} alt="별 아이콘"/>
}

export default StarIcon;