import styled from "styled-components";
import closeIcon from "../image/close.svg";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;
const Container = styled.div`
  display: inline-flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  .modalTitle {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  img {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  input {
    display: flex;
    width: 280px;
    padding: 18px 15px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);
  }
  button {
    display: flex;
    width: 280px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(
      --gra-purpleblue-to-skyblue,
      linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
    color: var(--Grey-Light, #f5f5f5);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;
    cursor: pointer;
  }
`;

interface Props {
  title: string;
  input: string;
  buttonText: string;
  onClose: () => void;
}

function Edit({ title, input, buttonText, onClose }: Props) {
  return (
    <Background>
      <Container>
        <img src={closeIcon} alt="closeButton" onClick={onClose}></img>
        <span className="modalTitle">{title}</span>
        <InputContainer>
          <input placeholder={input}></input>
          <button>{buttonText}</button>
        </InputContainer>
      </Container>
    </Background>
  );
}

export default Edit;
