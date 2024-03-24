import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.displays.rowCenter};
  width: 100%;
  padding: 3.75rem 2rem 5.62rem;
`;

export const Box = styled.div`
  ${({ theme }) => theme.displays.spaceBetween};
  max-width: 50rem;
  width: 100%;
  padding: 1rem 1.25rem;
  gap: 0.5rem;

  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
`;

export const BoxInput = styled.div`
  ${({ theme }) => theme.displays.rowCenter};
  width: 100%;
  gap: 0.75rem;
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
