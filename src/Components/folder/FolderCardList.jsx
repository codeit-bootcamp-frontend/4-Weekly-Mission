import React from "react";
import BlankCard from "../ui/BlankCard";
import styled from "styled-components";
import Card from "../ui/Card";

const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px;
`;

function FolderCardList({ links }) {
  return (
    <>
      {links.length !== 0 ? (
        <CardList>
          {links.data.map(link => (
            <Card key={link.id} cardData={link} />
          ))}
        </CardList>
      ) : (
        <BlankCard>저장된 링크가 없습니다</BlankCard>
      )}
    </>
  );
}

export default FolderCardList;
