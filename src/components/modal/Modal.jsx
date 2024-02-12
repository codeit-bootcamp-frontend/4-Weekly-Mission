import ModalCloseButton from "./ModalCloseIcon";
import ModalShareList from "./ModalShareList";
import ModalCategoryList from "./ModalCategoryList";
import ModalTitle from "./ModalTitle";
import ModalSubTitle from "./ModalSubTitle";
import ModalForm from "./ModalForm";
import Button from "../Button";
import "../../styles/modal.css";
function Modal({modalAction, setModalAction, categoryList}){
    const actionScript = {
        "폴더 이름 변경": {
            elementList: [<ModalTitle title={modalAction.action}/>,
             <ModalForm buttonText="변경하기"/>]
        },
        "폴더 추가": {
            elementList: [<ModalTitle title={modalAction.action}/>,
             <ModalForm buttonText="추가하기"/>]
        },
        "폴더 공유": {
            elementList: [<ModalTitle title={modalAction.action}/>,
             <ModalSubTitle subTitle={modalAction.subTitle}/>, 
            <ModalShareList/>]
        },
        "폴더에 추가": {
            elementList: [<ModalTitle title={modalAction.action}/>,
             <ModalSubTitle subTitle={modalAction.subTitle}/>, 
            <ModalCategoryList categoryList={categoryList}/>,
            <Button className="modal__button button-blue" buttonText="추가하기"/>]
        },
        "링크 삭제": {
            elementList: [<ModalTitle title={modalAction.action}/>,
             <ModalSubTitle subTitle={modalAction.subTitle}/>, 
            <Button className="modal__button button-red" buttonText="삭제하기"/>]
        },
        "폴더 삭제": {
            elementList: [<ModalTitle title={modalAction.action}/>,
             <ModalSubTitle subTitle={modalAction.subTitle}/>, 
            <Button className="modal__button button-red" buttonText="삭제하기"/>]
        }
    }

    const handleModalClose = () => {
        setModalAction({
            isView: false,
            action: "",
            subTitle: ""
        });
    }

    return (
        actionScript[modalAction.action] && <div 
        style={{
            display: modalAction.isView ? "block" : "none",
        }}
        className="modal__wrap">
            <div className="modal">
                <ModalCloseButton onClick={handleModalClose}/>
                { actionScript[modalAction.action].elementList.map((list, idx) => {
                    return <div key={idx}>{list}</div>;
                })}
            </div>
        </div>
    )
}

export default Modal;