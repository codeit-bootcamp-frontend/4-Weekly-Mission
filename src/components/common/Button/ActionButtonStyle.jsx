import styled from "styled-components";

export const Container = styled.button`
  ${({ theme }) => theme.displays.rowCenter};
  width: 120px;
  gap: 4px;

  @media ${({ theme }) => theme.devices.mobile} {
    position: fixed;
    left: 50%;
    bottom: 101px;
    transform: translateX(-50%);
    z-index: 33;
    width: 140px;
    padding: 8px 24px;

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
