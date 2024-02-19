import { styled } from "styled-components";

const InputButton = styled.button`
  width: 80px;
  padding: 16px 20px;
  border-radius: 8px;
  color: #fff;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  margin: 60px auto 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1199px) {
    width: 80px;
  }
  @media (max-width: 767px) {
    width: 80px;
  }
`;

export default InputButton;
