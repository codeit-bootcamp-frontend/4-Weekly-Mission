import styled from "styled-components";

export const Container = styled.footer`
  height: 160px;
  padding: 32px 104px 64px 104px;
  ${({ theme }) => theme.displays.flexSpaceBetween};
  background: ${({ theme }) => theme.colors.black};
`;

export const Company = styled.div`
  color: ${({ theme }) => theme.colors.gray60};
  font-family: Acme;
  ${({ theme }) => theme.fonts.text};
`;

export const LinkBox = styled.div`
  display: flex;
  gap: 30px;
  width: 181.111px;
  color: ${({ theme }) => theme.colors.gray20};

  font-family: Acme;
  ${({ theme }) => theme.fonts.text};
`;

export const SocialBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
