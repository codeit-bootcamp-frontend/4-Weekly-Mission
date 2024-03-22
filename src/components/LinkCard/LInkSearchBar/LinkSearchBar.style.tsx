import styled from "styled-components";

export const SearchBarWrapper = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 4rem;
`;

export const Input = styled.input`
  width: 100%;
  background-color: var(--LBrary-GrayLight);
  border-width: 0;
  border-radius: 1rem;
  border-color: var(--LBrary-white);
  padding: 1.5rem 4.1rem;

  &:focus {
    outline-color: var(--LBrary-Primary-color);
  }
`;

export const Label = styled.label`
  position: absolute;
  background-image: url("assets/Icons/Search.svg");
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 1.6rem;
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

export const SearchResult = styled.h2`
  margin: 4rem 0;
  color: var(--LBrary-Gray60);
  span {
    color: var(--LBrary-Gray100);
  }
`;
