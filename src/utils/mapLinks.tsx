import { format } from "date-fns";
import getElapsedTime from "./getElapsedTime.tsx";

interface LinkData {
  id: number;
  createdAt: string;
  url: string;
  imageSource: string;
  title?: string;
  description: string;
}

export const mapLinks = (link: LinkData) => {
  const { id, createdAt, url, imageSource, title, description } = link;
  return {
    id,
    url,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
  };
};
