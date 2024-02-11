import ModalCloseButton from "./ModalCloseIcon";
import ModalShareList from "./ModalShareList";
import ModalCategoryList from "./ModalCategoryList";
import Button from "../Button";
import "../../styles/modal.css";
function Modal({modalAction, categoryList}){
    return (
        <div className="modal__background">
            <div className="modal">
                <ModalCloseButton/>
                <p className="modal__title">폴더 이름 변경</p>
                <p className="modal__subTitle">폴더명</p>
                {/* <form className="modal__form">
                    <input className="modal__input" type="text" placeholder="내용 입력"/>
                    <Button className="modal__buttonn button-blue" buttonText="변경하기"/>
                </form> */}
            
                {/* <Button className="modal__buttonn button-red" buttonText="변경하기"/> */}
                {/* <ModalShareList/> */}

                <ModalCategoryList categoryList={categoryList}/>
                <Button className="modal__buttonn button-blue" buttonText="추가하기"/>
            </div>
        </div>
    )
}

export default Modal;