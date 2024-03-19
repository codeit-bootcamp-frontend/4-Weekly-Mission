import styled from "styled-components";

export const SearchBarWrapper = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: var(--LBrary-GrayLight);
  border-width: 0;
  border-radius: 10px;
  border-color: var(--LBrary-white);
  padding: 15px 41px;

  &:focus {
    outline-color: var(--LBrary-Primary-color);
  }
`;

export const Label = styled.label`
  position: absolute;
  background-image: url("assets/Icons/Search.svg");
  width: 16px;
  height: 16px;
  margin-left: 16px;
`;

export const InputClearButton = styled.button`
  position: absolute;
  height: 2.4rem;
  width: 2.4rem;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
`;
