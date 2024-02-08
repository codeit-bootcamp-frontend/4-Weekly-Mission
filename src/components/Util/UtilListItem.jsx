import ShareImg from "../../assets/share.svg";
import ModifyImg from "../../assets/modify.svg";
import DeleteImg from "../../assets/delete.svg";

function UtilListItem({value, text}){
    const imageObj = {
        share: ShareImg,
        modify: ModifyImg,
        delete: DeleteImg
    }
    return ( 
    <li className="content__util--list">
    <img className="content__util--img" src={imageObj[value]} alt={`${value}이미지`}/>
    <span className="content__util--text">{text}</span>
    </li>
    )
}

export default UtilListItem;