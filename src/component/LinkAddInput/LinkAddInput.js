import styled from "styled-components";
import linkImg from "../../images/link.svg";

const InputWrapper = styled.form`
  display: flex;
  gap: 12px;
  justify-content: center;
  width: 760px;
  margin: 0 auto;
  padding: 16px 20px;
  border: 1px solid #6d6afe;
  border-radius: 14px;

  & input {
    border: none;
    width: 100%;
  }

  & button {
    flex-shrink: 0;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    color: #f5f5f5;
  }
`;

const LinkAddInput = () => {
  return (
    <InputWrapper>
      <img src={linkImg} />
      <input placeholder="링크를 추가해 보세요" />
      <button type="button">추가하기</button>
    </InputWrapper>
  );
};

export default LinkAddInput;
