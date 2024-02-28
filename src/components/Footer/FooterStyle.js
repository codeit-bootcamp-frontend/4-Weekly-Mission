import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContianer = styled.footer`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 160px;
  padding: 32px 104px 64px 104px;

  background: var(--The-julge-black);

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 60px;
  }
`;

export const FooterCompany = styled.div`
  color: var(--Company-gray);

  font-family: Acme;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 767px) {
    grid-column: 1;
    grid-row: 2;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  width: 181px;

  @media screen and (max-width: 767px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const FooterIcon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 12px;

  @media screen and (max-width: 767px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

export const FooterLink = styled(Link)`
  color: var(--Footer-white);

  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
