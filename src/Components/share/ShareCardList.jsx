import React from "react";
import styled from "styled-components";
import CardItem from "../ui/Card";
import BlankCard from "../ui/BlankCard";

const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1124px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 767px) {
    grid-template: repeat(1, 1fr) / repeat(1, 1fr);
    gap: 20px;
  }
`;

function ShareCardList({ folders }) {
  if (!folders) {
    return null;
  }
  const { folder } = folders;

  const { links } = folder;
  console.log(links);

  return (
    <>
      {links.length === 0 ? (
        <BlankCard />
      ) : (
        <CardList>
          {links.map(link => (
            <CardItem key={link.id} cardData={link}></CardItem>
          ))}
        </CardList>
      )}
    </>
  );
}

export default ShareCardList;
