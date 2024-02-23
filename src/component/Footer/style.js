import styled from "styled-components";

export const Container = styled.div`
  background-color: #111322;
  color: #cfcfcf;
  display: flex;
  padding: 32px 104px 64px;
  justify-content: space-between;

  a,
  a:visited {
    color: #cfcfcf;
  }

  @media (max-width: 767px) {
    padding: 32px 32px 64px;
  }
`;

export const SnsIcons = styled.div`
  display: flex;
  gap: 12px;

  img {
    height: 18px;
    width: 18px;
  }
`;

export const PolicyFaq = styled.div`
  display: flex;
  gap: 30px;
`;

export const Copyright = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MobileCopyright = styled.div`
  display: none;
  background-color: #111322;
  color: #cfcfcf;
  padding: 16px 32px 32px;

  @media (max-width: 767px) {
    display: block;
  }
`;
