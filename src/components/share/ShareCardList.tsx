import React from "react";
import styled from "styled-components";
import CardItem from "../ui/Card";
import BlankCard from "../ui/BlankCard";
import { LinkType } from "interface/Type";

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

function ShareCardList({ links }: { links: LinkType[] | undefined }) {
  return (
    <>
      {links?.length === 0 ? (
        <BlankCard>저장된 링크가 없습니다.</BlankCard>
      ) : (
        <CardList>
          {links?.map((link: any) => (
            <CardItem key={link.id} cardData={link}></CardItem>
          ))}
        </CardList>
      )}
    </>
  );
}

export default ShareCardList;
