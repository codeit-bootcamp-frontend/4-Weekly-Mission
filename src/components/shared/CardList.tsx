import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  margin-bottom: 150px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoLink = styled.div`
  height: 334px;
  grid-column: 1/4;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  width: 1068px;
  @media (max-width: 1199px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 340px;
  }
`;

interface Link {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface Props {
  links: Link[];
  inputValue: string;
}

const CardList = ({ links, inputValue }: Props) => {
  const filteredLinks = links.filter((item) => {
    const title = item.title?.toLowerCase();
    const description = item.description?.toLowerCase();
    const url = item.url?.toLowerCase();
    return (
      title?.includes(inputValue) ||
      description?.includes(inputValue) ||
      url?.includes(inputValue)
    );
  });

  return (
    <Container>
      {filteredLinks.length ? (
        filteredLinks.map((link) => {
          return (
            <li key={link.id}>
              <Card link={link} />
            </li>
          );
        })
      ) : (
        <NoLink>저장된 링크가 없습니다</NoLink>
      )}
    </Container>
  );
};

export default CardList;
