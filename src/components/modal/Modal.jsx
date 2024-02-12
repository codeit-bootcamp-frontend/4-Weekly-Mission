import ModalCloseButton from "./ModalCloseIcon";
import ModalShareList from "./ModalShareList";
import ModalCategoryList from "./ModalCategoryList";
import ModalTitle from "./ModalTitle";
import ModalSubTitle from "./ModalSubTitle";
import ModalForm from "./ModalForm";
import Button from "../Button";
import "../../styles/modal.css";
import { useState } from "react";
function Modal({modalAction, categoryList}){
    const actionScript = {
        "폴더 이름 변경": {
            elementList: [<ModalTitle title={modalAction}/>,
             <ModalForm buttonText="변경하기"/>]
        },
        "폴더 추가": {
            elementList: [<ModalTitle title={modalAction}/>,
             <ModalForm buttonText="추가하기"/>]
        },
        "폴더 공유": {
            elementList: [<ModalTitle title={modalAction}/>,
             <ModalSubTitle subTitle="임시 텍스트"/>, 
            <ModalShareList/>]
        },
        "폴더에 추가": {
            elementList: [<ModalTitle title={modalAction}/>,
             <ModalSubTitle subTitle="임시 텍스트"/>, 
            <ModalCategoryList categoryList={categoryList}/>,
            <Button className="modal__button button-blue" buttonText="추가하기"/>]
        },
        "링크 삭제": {
            elementList: [<ModalTitle title={modalAction}/>,
             <ModalSubTitle subTitle="임시 텍스트"/>, 
            <Button className="modal__button button-red" buttonText="삭제하기"/>]
        },
        "폴더 삭제": {
            elementList: [<ModalTitle title={modalAction}/>,
             <ModalSubTitle subTitle="임시 텍스트"/>, 
            <Button className="modal__button button-red" buttonText="삭제하기"/>]
        }
    }

    const [isModalView, setIsModalView] = useState(true);
    const handleModalClose = () => {
        setIsModalView(false);
    }
    return (
        modalAction && <div 
        style={{
            display: isModalView ? "block" : "none",
        }}
        className="modal__wrap">
            <div className="modal">
                <ModalCloseButton onClick={handleModalClose}/>
                {actionScript[modalAction].elementList.map((list, idx) => {
                    return <div key={idx}>{list}</div>;
                })}
            </div>
        </div>
    )
}

export default Modal;