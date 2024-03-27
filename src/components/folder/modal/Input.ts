import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border: 0.1px solid #ccd5e3;
  padding-left: 10px;
  transition: border-color 0.2s ease-in-out;
  outline: none;

  &:focus {
    border: 0.1px solid #6d6afe;
  }
`;

export default Input;
