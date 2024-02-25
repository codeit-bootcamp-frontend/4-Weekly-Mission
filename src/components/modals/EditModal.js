import styled from "styled-components";
import modalCloseIcon from "../../images/cancel-icon.png";
import "../../colors.css";

function EditModal({ purpose, handleModalOff }) {
  let buttonText = "";
  if (purpose === "폴더 이름 변경") {
    buttonText = "변경하기";
  } else if (purpose === "폴더 추가") {
    buttonText = "추가하기";
  }

  return (
    <ModalContainer onClick={handleModalOff}>
      <ModalForm
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Name>{purpose}</Name>
        <CloseButton onClick={handleModalOff}>
          <img src={modalCloseIcon} alt="closeButton" />
        </CloseButton>
        <Input
          type="text"
          name={purpose}
          placeholder="내용 입력"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // 기본 동작 방지
              e.stopPropagation(); // 이벤트 전파 방지
            }
          }}
        />
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {buttonText}
        </Button>
      </ModalForm>
    </ModalContainer>
  );
}
const Button = styled.button`
  width: 280px;
  height: 51px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  border-radius: 8px;
  color: #f5f5f5;
  border: none;
  margin: 15px 0 32px 0;
  font-size: 16px;
  height: 51px;
`;
const ModalForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid var(--gray20, #ccd5e3);
  background: var(--white, #fff);
  width: 360px;
  height: 239px;
`;
const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

const Name = styled.p`
  color: var(--gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 32px 0 24px 0;
`;
const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--gray20, #ccd5e3);
  background: var(--white, #fff);
  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  cursor: pointer;
  background-color: white;
`;

export default EditModal;
