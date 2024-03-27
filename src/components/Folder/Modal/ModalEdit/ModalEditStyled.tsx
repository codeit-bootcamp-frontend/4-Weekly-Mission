import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 100%;
`;

export const Input = styled.input`
  background-color: initial;
  border: 1px solid #ccd5e3;
  border-radius: 0.8rem;
  color: #373740;
  font-size: 1.6rem;
  cursor: pointer;
  padding: 1.8rem 1.5rem;
  width: 100%;

  &:hover {
    border: 1px solid #6d6afe;
  }

  &:focus {
    outline: none;
    border: 1px solid #6d6afe;
  }
`;

export const EditButton = styled.button`
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border-radius: 0.8rem;
  border: none;
  color: #f5f5f5;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.8rem 1.5rem;
  width: 100%;
  height: 5.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
