import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { BlueButton } from "../BlueButton";
import closeIcon from "../../../assets/icons/closeModal.png";

export interface ModalPropsType {
  $isVisible: string;
}
export const AddFolderModal = ({ $isModalVisible, setIsModalVisible }) => {
  const handleCloseBtn = () => {
    setIsModalVisible(null);
  };

  return (
    <Background $isVisible={$isModalVisible}>
      <Modal>
        <Close onClick={() => handleCloseBtn()}>
          <img src={closeIcon} alt={closeIcon} />
        </Close>
        <Title>폴더 추가</Title>
        <Input placeholder="내용 입력" />
        <BlueButton
          text="추가하기"
          width="280px"
          height="auto"
          margin="0px"
          padding="16px 20px"
          fontSize="16px"
          radius="8px"
          onBtnHandle={() => {}}
        ></BlueButton>
      </Modal>
    </Background>
  );
};

const Background = styled.div<ModalPropsType>`
  display: ${({ $isVisible }) =>
    $isVisible === "폴더 추가" ? "block" : "none"};
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: visibility 0.3s ease;
`;

const Modal = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  background-color: ${COLORS.White};
  transition: visibility 0.3s ease;
`;

const Close = styled.button`
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  color: #373740;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Input = styled.input`
  width: 280px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid ${COLORS.Grey_300};
  background: ${COLORS.White};
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;

  &:focus {
    border: 1px solid ${COLORS.Primary};
  }
`;
