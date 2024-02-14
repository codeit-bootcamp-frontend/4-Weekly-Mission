import Button from "../Button";
function ModalForm(){
    return (
        <form className="modal__form">
            <input className="modal__input" type="text" placeholder="내용 입력"/>
            <Button className="modal__button button-blue" buttonText="변경하기"/>
        </form>
    )
}

export default ModalForm;