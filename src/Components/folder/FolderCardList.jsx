import React, { useEffect, useState } from "react";
import BlankCard from "../ui/BlankCard";
import styled from "styled-components";
import Card from "../ui/Card";
import { getFolderLink } from "../../utils/Api";
import { useFolder } from "../../context/FolderContext";

const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px;
`;

function FolderCardList() {
  const [links, setLinks] = useState(null);
  const { folderState } = useFolder();

  console.log(links);
  useEffect(() => {
    getFolderLink(folderState.id).then(setLinks);
  }, [folderState]);

  return (
    <>
      {links ? (
        links.data.length === 0 ? (
          <BlankCard>저장된 링크가 없습니다</BlankCard>
        ) : (
          <CardList>
            {links.data.map(link => (
              <Card key={link.id} cardData={link} />
            ))}
          </CardList>
        )
      ) : (
        ""
      )}
    </>
  );
}

export default FolderCardList;
