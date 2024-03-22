import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 1060px;
  width: 100%;
  gap: 40px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 15px 16px;
  gap: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.grayLight};
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray60};
  ${({ theme }) => theme.fonts.subTitleSmall};
  ${({ theme }) => theme.bolds.bold};

  @media ${({ theme }) => theme.devices.mobile} {
    ${({ theme }) => theme.fonts.large};
  }
`;

export const Bold = styled.span`
  color: ${({ theme }) => theme.colors.gray100};
`;
