import React from "react";
import { format } from "date-fns";
import getElapsedTime from "../../utils/getElapsedTime.tsx";
import CardList from "../common/CardList/CardList.tsx";
import ReadCard from "../Shared/ReadCard.tsx";

interface Link {
  id: number;
  url: string;
  image_source: string;
  title: string;
  created_at: string;
  description: string;
}

interface ReadFolderCardProps {
  links: Link[];
}

function ReadFolderCard({ links }: ReadFolderCardProps) {
  return (
    <CardList>
      {links.map((link) => (
        <ReadCard
          key={link.id}
          url={link.url}
          imageSource={link.image_source}
          alt={`${link.title}의 이미지`}
          elapsedTime={getElapsedTime(link.created_at)}
          description={link.description}
          createdAt={format(new Date(link.created_at), "yyyy. MM. dd")}
        />
      ))}
    </CardList>
  );
}

export default ReadFolderCard;
