import styled from 'styled-components';

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: flex - end;
  width: 100%;
  height: 100vh;
  max-width: 1920px;
  padding: 5rem 6rem 0;
  overflow: hidden;
`;

export const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 4rem;
  text-align: center;
`;

export const HomeImage = styled.img`
  width: 50rem;
`;

export const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100 %;
  padding: 5rem 0;
  background: var(--color-white);
`;

export const MainTitle = styled.h2`
    grid - area: title;
color: #000;
font - weight: 700;
font - size: 2.5rem;
`;

export const MainSection = styled.section`
  display: grid;
  max-width: 1920px;
  padding: 4rem;
  text-align: center;
  column-gap: 10rem;

  &: nth-child(even) {
    grid-template:
      'img .'
      'img title'
      'img description'
      'img .';
  }

  &: nthchild(odd) {
    grid-template:
      '. img'
      'title img'
      'description img'
      '. img';
  }

  @media screen and(width >= 375px) and(width <= 767px) {
    &: nth-child(odd) {
      grid-template:
        'title'
        'img'
        'description';
    }

    &: nth-child(even) {
      grid-template:
        'title'
        'img'
        'description';
    }
  }
`;

export const MainDescription = styled.p`
  grid-area: description;
  color: #6b6b6b;
  font-weight: 400;
  font-size: 1.25rem;
`;

export const MainImage = styled.img`
  grid-area: img;
  width: 40rem;
`;
