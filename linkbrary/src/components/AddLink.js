import { styled } from "styled-components";
import linkImgSrc from "../assets/link.svg";
import InputButton from "../functions/InputButton";

function AddLink() {
  return (
    <BackGround>
      <InputBox>
        <img src={linkImgSrc} alt="링크 사진" className="img-li" />
        <Input placeholder="링크를 추가해 보세요."></Input>
        <InputButton>추가하기</InputButton>
      </InputBox>
    </BackGround>
  );
}

export default AddLink;

const BackGround = styled.div`
  background-color: var(--light-blue);
  display: flex;
  justify-content: center;
`;

const InputBox = styled.div`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid var(--primary);
  background: var(--white);
  margin: 60px auto 90px;
  flex-direction: row;

  @media (max-width: 1199px) {
    width: 704px;
  }
  @media (max-width: 767px) {
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

  @media (max-width: 767px) {
    &::placeholder {
      font-size: 14px;
    }
  }
`;
