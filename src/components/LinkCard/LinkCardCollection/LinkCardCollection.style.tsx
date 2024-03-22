import styled from "styled-components";

export const CardGridLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 2.5rem 2rem;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const CardBoxOriginPosition = styled.div`
  padding: 0;
  border: none;
  background-color: var(--lb-white);
  position: relative;
  width: 100%;
  height: 33.4rem;
  max-width: 34rem;
  border-radius: 1.5rem;
  box-shadow: 0px 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);

  &a {
    text-decoration-line: none;
  }
`;

export const FavorStarButton = styled.button`
  display: flex;
  position: absolute;
  padding: 0;
  background-color: transparent;
  border: none;
  top: 1.5rem;
  right: 1.5rem;
  width: 3.4rem;
  height: 3.4rem;
`;

export const CardWrapper = styled.section`
  a {
    text-decoration-line: none;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 32.5rem;
    max-width: 32.7rem;

    div {
      border-radius: 1.5rem 1.5rem 0 0;
      height: 19.2rem;
    }
  }

  &:hover {
    section {
      background-color: var(--lb-background);
    }

    div {
      background-size: 130%;
    }
  }
`;

export const CardImageDiv = styled.div<{ $image?: string }>`
  border-radius: 1.5rem 1.5rem 0 0;
  height: 20rem;
  background-position-x: center;
  background-position-y: center;
  background-color: #dddfff;
  background-repeat: no-repeat;

  background-image: url(${({ $image }) =>
    $image
      ? `${$image}); background-size: cover`
      : `${process.env.PUBLIC_URL}/no-img-card.svg)`};;;;;;
`;

export const TextSection = styled.div`
  border-radius: 0 0 1.5rem 1.5rem;
  display: block;
  text-align: left;
  padding: 1.5rem 2rem;
  height: 13.5rem;

  @media (max-width: 767px) {
    border-radius: 0 0 1.5rem 1.5rem;
    display: block;
    text-align: left;
    padding: 1.5rem 2rem;
  }
`;

export const TextPassedTime = styled.p`
  color: #666;
  text-decoration-line: none;
  text-wrap: nowrap;
`;

export const TextLinkDescription = styled.p`
  display: -webkit-box;
  margin: 1rem auto;
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  min-height: 4.8rem;

  text-decoration-line: none;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TextLinkCreatedDate = styled.p`
  overflow: hidden;
  color: #333;

  text-overflow: ellipsis;
  white-space: nowrap;
`;
