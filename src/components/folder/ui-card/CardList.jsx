import React, { useEffect, useState } from "react";
import { formatDate, getTimeDifference } from "../../../utils/dateUtils";
import Card from "./Card";
import styled from "styled-components";
import { useFolder } from "../../../contexts/FolderContext";
import { getLinks } from "../../../utils/api";
import NoLink from "../../../pages/NoLink";

const CardListContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px;

  @media (min-width: 767px) and (max-width: 1124px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;
const CardList = () => {
  const { currentFolder } = useFolder();
  const [currentLinks, setCurrentLinks] = useState([]);

  const loadLinks = async () => {
    const links = await getLinks(currentFolder.id);
    setCurrentLinks(links["data"]);
  };
  useEffect(() => {
    loadLinks();
  }, [currentFolder]);

  return currentLinks.length === 0 ? (
    <NoLink />
  ) : (
    <CardListContainer>
      {currentLinks.map((link) => {
        const { id, created_at, description, image_source, url } = link;
        const createdDate = new Date(created_at);
        const currentDate = new Date();

        const createdDateString = formatDate(createdDate);
        const timeDifference = getTimeDifference(createdDate, currentDate);

        return (
          <Card
            id={id}
            cardImage={image_source}
            cardTime={{ createdDateString, timeDifference }}
            cardDescription={description}
            cardUrl={url}
          />
        );
      })}
    </CardListContainer>
  );
};

export default CardList;
