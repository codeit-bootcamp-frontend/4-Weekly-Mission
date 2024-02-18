import styled from 'styled-components';

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1920px;
  padding: 6rem 6rem 0;
  overflow: hidden;

  @media screen and (width < 768px) {
    padding: 6rem 2rem 0;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
  text-align: center;
`;

export const HomeImage = styled.img`
  width: 75rem;

  @media screen and (width <1200px) {
    width: 50rem;
  }

  @media screen and (width < 768px) {
    width: 100vw;
    padding: 0 2rem;
  }
`;

export const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
  background: var(--color-white);
`;

export const MainTitle = styled.h2`
  grid-area: title;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
`;

export const MainArticle = styled.article`
  display: grid;
  column-gap: 10rem;
  max-width: 1920px;
  padding: 4rem;
  text-align: center;

  &:nth-child(even) {
    grid-template:
      'img .'
      'img title'
      'img description'
      'img .';
  }

  &:nth-child(odd) {
    grid-template:
      '. img'
      'title img'
      'description img'
      '. img';
  }

  @media screen and (width<759px) {
    gap: 1.4rem;

    &:nth-child(odd) {
      grid-template:
        'title'
        'img'
        'description';
    }

    &:nth-child(even) {
      grid-template:
        'title'
        'img'
        'description';
    }
  }
`;

export const MainDescription = styled.p`
  grid-area: description;
  font-size: 1.25rem;
  font-weight: 400;
  color: #6b6b6b;
`;

export const MainBr = styled.br`
  @media screen and (width < 768px) {
    display: inline-block;
    padding: 0 1rem;
    content: ' ';
  }
`;

export const MainImage = styled.img`
  grid-area: img;
  width: 35rem;

  @media screen and (width <1200px) {
    width: 26rem;
  }

  @media screen and (width < 768px) {
    width: 100vw;
    padding: 0 2rem;
  }
`;
