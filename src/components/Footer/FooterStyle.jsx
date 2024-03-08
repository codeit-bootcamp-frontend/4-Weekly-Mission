import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  height: 160px;
  padding: 32px 104px 64px 104px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  background: var(--The-julge-black, #111322);
`;

export const Company = styled.div`
  color: #676767;

  text-align: center;
  font-family: Acme;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LinkBox = styled.div`
  display: flex;
  width: 181.111px;
  align-items: flex-start;
  gap: 30px;
`;

export const Link = styled.div`
  color: #cfcfcf;

  font-family: Acme;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
