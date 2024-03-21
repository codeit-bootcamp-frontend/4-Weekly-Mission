import styled from "styled-components";
import { CloseBtn, EditBtn, ModalTitle } from "./ModalFolderEdit";

const Modal = styled.div`
  width: 36rem;
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;
  display: ${({ type }) => (type === "Delete" ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const TargetName = styled.p`
  color: #9fa6b2;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 8px;
`;

function ModalDelete({ type, dispatch }) {
  return (
    <Modal type={type.type}>
      <CloseBtn
        onClick={() => {
          dispatch({ state: false });
        }}
      />
      <div>
        <ModalTitle>{type.title}</ModalTitle>
        <TargetName>{type.deleteTarget}</TargetName>
      </div>
      <EditBtn>삭제하기</EditBtn>
    </Modal>
  );
}

export default ModalDelete;
