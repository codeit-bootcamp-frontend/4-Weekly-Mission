import styled from "styled-components";
import closeIcon from '../img/close.png';




const Modal = styled.div`
    width : 36rem;
    padding : 3.2rem 4rem;
    background-color : #fff;
    border-radius : 15px;
    display : ${({type}) => type==='Edit' ? 'flex' : 'none'};
    flex-direction : column;
    gap : 24px;
    position : relative;
`;

export const ModalTitle = styled.h3`
    text-align : center;
    font-size : 2rem;
    font-weight : 700;
    color: #373740;
`;

const UserInput = styled.input`
    margin-bottom : 1.5rem;
    padding : 1.8rem 1.5rem;
    border : 1px solid #6D6AFE;
    width : 100%;
    border-radius : 8px;
    font-size : 1.6rem;
`;

export const EditBtn = styled.button`
    padding : 1.6rem 2rem;
    border-radius : 8px;
    background : ${({linear}) => linear ? 'linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)' : '#FF5B56'};
    width : 100%;
    cursor: pointer;
    color : #F5F5F5;
    font-size : 1.6rem;
`;

export const CloseBtn = styled.button`
    position : absolute;
    top : 16px;
    right : 16px;
    background-image : url(${closeIcon});
    width : 24px;
    height : 24px;
    cursor: pointer;
`;

function ModalFolderEdit({type, dispatch}) {

    return (
        <Modal type={type.type}>
            <CloseBtn onClick={() => {dispatch({state : false})}}/>           
            <ModalTitle>{type.title}</ModalTitle>
            <div>
                <UserInput type="text" placeholder={type.placeHolder}></UserInput>
                <EditBtn linear>{type.buttonText}</EditBtn>
            </div>
        </Modal>
    )
}


export default ModalFolderEdit;