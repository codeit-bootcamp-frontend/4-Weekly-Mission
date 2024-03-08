import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 16px;
  width: 1060px;
  border-radius: 10px;
  background: #f5f5f5;
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.regular};
`;
