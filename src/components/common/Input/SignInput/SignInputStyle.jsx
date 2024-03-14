import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  padding: 18px 15px;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

export const Input = styled.input`
  width: 100%;
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
`;
