import * as dateFns from "date-fns";
import { getElapsedTime } from "../../sharing/util";

interface Props {
  id: number | string;
  createdAt: Date;
  url: string;
  imageSource: string;
  title: string;
  description: string;
}

export const mapLinksData = (link: Props) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    url,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description,
    createdAt: dateFns.format(new Date(createdAt), "yyyy. MM. dd"),
  };
};
