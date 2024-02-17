import styled from "styled-components";

const LinkSearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f5f5f5;
  width: 100%;
  margin: 40px auto;
  padding: 16px 20px;
  border-radius: 14px;

  & img {
    width: 1rem;
    height: 1rem;
  }

  & input {
    background: none;
    width: 100%;
    border: none;
    font-size: 1rem;
  }
`;

export default LinkSearchInputWrapper;
