import styled from "styled-components";
import "../../colors.css";
import cancelIcon from "../../images/cancel-icon.png";

function DeleteModal({ purpose, link, folderName, handleModalOff }) {
  let title = "";
  let message = "";
  if (purpose === "폴더 삭제") {
    title = "폴더 삭제";
    message = folderName;
  } else if (purpose === "링크 삭제") {
    title = "링크 삭제";
    message = link;
  }

  return (
    <ModalContainer onClick={handleModalOff}>
      <ModalForm
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseButton onClick={handleModalOff}>
          <img src={cancelIcon} alt="closeButton" />
        </CloseButton>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <DeleteButton
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          삭제하기
        </DeleteButton>
      </ModalForm>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalForm = styled.form`
  width: 360px;
  height: 193px;
  background-color: #ffffff;
  border-radius: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: var(--gray10);
  border-radius: 9999px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const DeleteButton = styled.button`
  width: 280px;
  height: 51px;
  border-radius: 8px;
  color: #f5f5f5;
  border: none;
  margin: 24px 0 32px 0;
  font-size: 16px;
  background: var(--red);
`;

const Title = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 32px 0 8px 0;
`;

const Message = styled.p`
  color: var(--gray60);
  font-size: 14px;
`;
export default DeleteModal;
