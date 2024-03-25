import styled from 'styled-components';

interface LinkIconType {
  $icon: string;
}

export const Folder = styled.main`
  width: 100%;
  max-width: 1920px;
  min-width: 375px;
  background-color: white;
`;

export const Link = styled.section`
  width: 100%;
  z-index: 999;
  padding: 3rem 0;
  height: 70px;
  background: var(--Linkbrary-bg);
  text-align: center;
`;

export const LinkBox = styled.div`
  width: 50rem;
  position: relative;
  margin: 0 auto;
  @media screen and (max-width: 1124px) {
    width: 41.5rem;
  }

  @media screen and (max-width: 767px) {
    width: 20.3125rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`;

export const LinkInput = styled.input<LinkIconType>`
  width: 50rem;
  padding: 1rem 1.25rem;
  height: 2.2rem;
  border-radius: 0.9375rem;
  border: 1px solid var(--Linkbrary-primary-color);
  outline: none;
  @media screen and (max-width: 1124px) {
    width: 41.5rem;
  }

  @media screen and (max-width: 767px) {
    padding: 0.5rem 0.62rem;
    width: 20.3125rem;
  }

  &::placeholder {
    font-size: 1rem;
    background: url(${({ $icon }) => $icon}) no-repeat;
    background-size: contain;
  }
`;

export const LinkAddButton = styled.button`
  padding: 0.625rem 1rem;
  width: 5rem;
  height: 2.3125rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 0.5rem;
  background: var(--gra-purpleblue-to-skyblue);
  border: none;
  outline: none;
  color: var(--Grey-Light, #f5f5f5);
  position: absolute;
  right: -1rem;
  top: 1rem;
  @media screen and (max-width: 767px) {
    top: 0.5rem;
  }
`;
