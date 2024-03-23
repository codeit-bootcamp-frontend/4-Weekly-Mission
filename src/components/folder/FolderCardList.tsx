import React, { useEffect, useState } from "react";
import BlankCard from "../ui/BlankCard";
import styled from "styled-components";
import Card from "../ui/Card";
import { searchFolderLink } from "utils/Api";
import { useFolder } from "context/FolderContext";
import { useSearchParams } from "react-router-dom";

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

function FolderCardList() {
  const [links, setLinks] = useState([]);
  const [searchResult] = useSearchParams();
  const searchValue = searchResult.get("search");
  console.log(links);
  const { folderFilter } = useFolder();

  useEffect(() => {
    searchFolderLink(folderFilter.id, searchValue).then(setLinks);
  }, [folderFilter, searchValue]);

  return (
    <>
      {links.length === 0 ? (
        <BlankCard>저장된 링크가 없습니다</BlankCard>
      ) : (
        <CardList>
          {links.map((link: any) => (
            <Card key={link.id} cardData={link} />
          ))}
        </CardList>
      )}
    </>
  );
}

export default FolderCardList;
