import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.displays.spaceBetween};
  max-width: 800px;
  width: 100%;
  padding: 16px 20px;
  gap: 8px;

  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.div`
  ${({ theme }) => theme.displays.rowCenter};
  width: 100%;
  gap: 12px;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray60};
  ${({ theme }) => theme.fonts.regular};
  ${({ theme }) => theme.bolds.normal};

  border: none;

  @media ${({ theme }) => theme.devices.mobile} {
    ${({ theme }) => theme.fonts.regularSmall};
    ${({ theme }) => theme.bolds.normal};
  }
`;
