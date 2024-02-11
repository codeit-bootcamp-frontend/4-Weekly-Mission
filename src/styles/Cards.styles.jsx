import styled from 'styled-components';
import React from 'react';
import Card from './Card.styles';

const Cards = ({ links }) => {
  return (
    <StyledSection>
      {links.map(link => {
        const { createdAt, url, title, description, imageSource } = link;
        return (
          <Card
            key={link.id}
            createdAt={createdAt}
            url={url}
            title={title}
            description={description}
            imageURL={imageSource}
          />
        );
      })}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin: 2rem 0;

  @media screen and (width>1124px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Cards;
