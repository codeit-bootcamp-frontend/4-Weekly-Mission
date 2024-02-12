import ShareImg from "../../assets/share.svg";
import ModifyImg from "../../assets/modify.svg";
import DeleteImg from "../../assets/delete.svg";

function UtilListItem({value, text, onClick, selectCategory}){
    const imageObj = {
        share: ShareImg,
        modify: ModifyImg,
        delete: DeleteImg
    }

    const handleModalUtilAction = (value) => {
        switch(value){
            case "share": onClick("폴더 공유", selectCategory.name);
            break;
            
            case "modify": onClick("폴더 이름 변경");
            break;

            case "delete": onClick("폴더 삭제", selectCategory.name);
            break;
        }
    }

    return ( 
    <li className="content__util--list" onClick={() => handleModalUtilAction(value)}>
    <img className="content__util--img" src={imageObj[value]} alt={`${value}이미지`}/>
    <span className="content__util--text">{text}</span>
    </li>
    )
}

export default UtilListItem;