import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.displays.flexSpaceBetween};
  width: 800px;
  padding: 16px 20px;
  gap: 8px;

  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.div`
  ${({ theme }) => theme.displays.flexCenterRow};
  gap: 12px;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.gray60};
  ${({ theme }) => theme.fonts.regular};

  border: none;
`;
