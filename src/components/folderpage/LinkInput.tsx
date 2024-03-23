import styled from 'styled-components';
import link from '../../image/link.svg';

const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 16px 40px;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);

  &:placeholder {
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
const Img = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  display: flex;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 70px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

interface Props {
  onClick: () => void;
}

function LinkInput({ onClick }: Props) {
  return (
    <>
      <Input placeholder="링크를 추가해 보세요" />
      <Img src={link} alt="link" />
      <Button onClick={onClick}>추가하기</Button>
    </>
  );
}

export default LinkInput;
