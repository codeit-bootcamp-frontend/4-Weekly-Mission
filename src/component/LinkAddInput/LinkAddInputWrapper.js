import styled from "styled-components";

const LinkAddInputWrapper = styled.form`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  width: 760px;
  margin: 0 auto;
  padding: 16px 20px;
  border: 1px solid #6d6afe;
  border-radius: 14px;

  & img {
    width: 20px;
    height: 20px;
  }

  & input {
    border: none;
    width: 100%;
    font-size: 1rem;
  }

  & button {
    flex-shrink: 0;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    color: #f5f5f5;
  }

  & button:hover {
    cursor: pointer;
  }
`;

export default LinkAddInputWrapper;
