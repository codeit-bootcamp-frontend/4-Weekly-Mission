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

const CardBlank = styled.div`
  width: 100%;
  text-align: center;
  padding: 41px 0 35px 0;
  margin: 0 auto;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

function FolderCardArea({ links }) {
  return (
    <>
      {links.length !== 0 ? (
        <CardList>
          {links.data.map(link => (
            <Card key={link.id} cardData={link} />
          ))}
        </CardList>
      ) : (
        <CardBlank>
          <BlankCard />
        </CardBlank>
      )}
    </>
  );
}

export default FolderCardArea;
