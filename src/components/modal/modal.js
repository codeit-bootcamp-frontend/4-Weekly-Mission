import './modal.css';
import styled from 'styled-components';

const ModalButton = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 16px 20px;
    color:  #fff;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Pretendard';
    background: ${({background}) => background === `blue` ? `linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%);` : `rgba(255, 91, 86, 1)` };
    border-radius: 8px;
    border : none;
    margin-top: 15px;
`

function Modal({name, setOpenModal, buttonColor, buttonName}) {
    const handleCloseClick = () => {
        setOpenModal(false);
    }
    return(
        <div className="modalCon">
            <div className="modalBox">
                <h4>{name}</h4>
                <button className='deleteModal' type='button' onClick={handleCloseClick}><img src={`${process.env.PUBLIC_URL}/images/close.svg`} alt='닫기 버튼'/></button>
                <form>
                    <input type='text' placeholder='내용 입력'/>
                    {buttonName === '' ? null : <ModalButton type='button' background={buttonColor}>{buttonName}</ModalButton>}
                </form>
            </div>
        </div>
    )
}

export default Modal;