import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1060px;
  width: 100%;
  padding: 15px 16px;
  gap: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.grayLight};
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.regular};
  ${({ theme }) => theme.bolds.normal};

  @media ${({ theme }) => theme.devices.mobile} {
    ${({ theme }) => theme.fonts.regularSmall};
    ${({ theme }) => theme.bolds.normal};
  }
`;
