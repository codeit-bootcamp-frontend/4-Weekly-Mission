import ModalKaKaoIcon from "../../assets/modal-kakao.svg";
import ModalFacebookIcon from "../../assets/modal-facebook.svg";
import ModalLinkIcon from "../../assets/modal-link.svg";
const modalShareList = [
    {
        backgroundColor: "#FEE500",
        icon: ModalKaKaoIcon,
        text: "카카오톡",
    },
    {
        backgroundColor: "#1877F2",
        icon: ModalFacebookIcon,
        text: "페이스북",
    },
    {
        backgroundColor: "rgba(157, 157, 157, 0.04)",
        icon: ModalLinkIcon,
        text: "링크 복사",
    }
];

function ModalShareList(){
    return (
        <ul className="modal__share">
            {modalShareList.map(list => {
                const {backgroundColor, icon, text} = list;
                return (<>
                <li className="modal__share--list">
                    <div className="modal__icon--background" style={{backgroundColor}}>
                        <img src={icon} alt={`폴더 공유 ${text} 아이콘`}/>
                    </div>
                    <p className="modal__icon--text">{text}</p>
                </li>
                
                
                </>)
            })}
        </ul>
    )
}

export default ModalShareList;