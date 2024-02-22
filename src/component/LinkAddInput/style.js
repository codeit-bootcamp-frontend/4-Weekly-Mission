import styled from "styled-components";

export const Div = styled.div`
  background-color: #f0f6ff;
  padding: 100px 2rem;
`;

export const LinkAddForm = styled.form`
  background-color: white;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px 20px;
  border: 1px solid #6d6afe;
  border-radius: 14px;

  &:focus-within {
    outline: 1px solid purple;
  }

  & img {
    width: 20px;
    height: 20px;
  }

  & input {
    border: none;
    width: 100%;
    font-size: 1rem;

    &:focus-visible {
      outline: none;
    }
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
