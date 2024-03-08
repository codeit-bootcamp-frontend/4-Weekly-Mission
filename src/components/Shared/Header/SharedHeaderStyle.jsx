import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.displays.flexCenter}
  width: 1440px;
  margin: 0 auto;
  padding: 20px 0 60px;
  gap: 8px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
`;

export const Owner = styled.div`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.regular};
`;

export const Folder = styled.div`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.largeBold};
`;
