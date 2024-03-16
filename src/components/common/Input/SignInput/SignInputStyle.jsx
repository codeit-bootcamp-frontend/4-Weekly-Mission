import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.displays.spaceBetween};
  width: 400px;
  padding: 18px 15px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
  width: 100%;
  border: none;
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
`;
