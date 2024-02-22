import styled from "styled-components";
import { CloseBtn, EditBtn, Modal, ModalTitle } from "./ModalFolderEdit";





const TargetName = styled.p`
    color : #9FA6B2;
    font-size : 1.4rem;
    text-align : center;
    margin-top : 8px;
`;







function ModalDelete() {
    return (
        <Modal>
            <CloseBtn></CloseBtn>
            <div>
                <ModalTitle>링크 삭제</ModalTitle>
                <TargetName>폴더명</TargetName>
            </div>
            <EditBtn>삭제하기</EditBtn>
        </Modal>
    )
}

export default ModalDelete;