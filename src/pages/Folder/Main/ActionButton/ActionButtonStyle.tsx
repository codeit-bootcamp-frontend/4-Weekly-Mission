import styled from "styled-components";

export const Container = styled.button`
  ${({ theme }) => theme.displays.rowCenter};
  width: 7.5rem;
  gap: 0.25rem;

  @media ${({ theme }) => theme.devices.mobile} {
    position: fixed;
    left: 50%;
    bottom: 6.3rem;
    transform: translateX(-50%);
    z-index: 33;
    width: 8.75rem;
    padding: 0.5rem 1.5rem;

    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
  }
`;
export const Title = styled.div`
  text-align: center;

  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.regular};
  ${({ theme }) => theme.bolds.normal};

  @media ${({ theme }) => theme.devices.mobile} {
    color: ${({ theme }) => theme.colors.gray10};
    ${({ theme }) => theme.fonts.regular};
    ${({ theme }) => theme.bolds.semiBold};
  }
`;
export const Image = styled.img`
  width: 16px;
  height: 16px;
`;
