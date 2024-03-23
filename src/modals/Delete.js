import styled from 'styled-components';
import closeIcon from '../image/close.svg';

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
  border: 1px solid var(--Stroke-light, #dee2e6);
  background: var(---Gray-White, #fff);
  img {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  .title {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .main {
    color: var(--Linkbrary-gray60, #9fa6b2);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;
const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--Linkbrary-red, #ff5b56);
  border: none;
  cursor: pointer;
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function Delete({ title, main, buttonText, onClose }) {
  return (
    <Background>
      <Container>
        <img src={closeIcon} alt="closeButton" onClick={onClose}></img>
        <TitleContainer>
          <span className="title">{title}</span>
          <span className="main">{main}</span>
        </TitleContainer>
        <Button>{buttonText}</Button>
      </Container>
    </Background>
  );
}

export default Delete;
