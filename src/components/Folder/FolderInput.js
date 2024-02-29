import { styled } from "styled-components";
import Link from "../../assets/icons/link.svg";
import { BlueButton } from "./../common/BlueButton";

const FolderInput = ({ setIsVisible }) => {
  const BtnHandle = () => {
    setIsVisible("폴더 추가");
  };

  return (
    <BackGround>
      <InputBox>
        <img src={Link} alt="LinkIcon" />
        <Input placeholder="링크를 추가해 보세요."></Input>
        <BlueButton
          width="80px"
          padding="10px 16px"
          text="추가하기"
          radius="8px"
          onBtnHandle={() => BtnHandle()}
        ></BlueButton>
      </InputBox>
    </BackGround>
  );
};

export default FolderInput;

const BackGround = styled.div`
  background-color: var(--Grey_100);
  display: flex;
  justify-content: center;
`;

const InputBox = styled.div`
  width: 800px;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
  margin: 60px auto 90px;
  display: flex;
  flex-direction: row;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 774px) {
    width: 325px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin-left: 12px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9fa6b2;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  @media (max-width: 774px) {
    &::placeholder {
      font-size: 14px;
    }
  }
`;
