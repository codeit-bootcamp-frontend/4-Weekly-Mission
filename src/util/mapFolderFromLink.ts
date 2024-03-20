import format from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

interface Link {
  id: number;
  created_at: string;
  url: string;
  image_source: string;
  title?: string;
  description?: string;
  favorite?: boolean;
}

export const mapFolderFromLink = (data: Link[]) => {
  if (!data) return [];

  const mapLinks = (link: Link) => {
    const {
      id,
      created_at: createdAt,
      url,
      image_source: imageSource,
      title,
      description,
      favorite = false,
    } = link;

    return {
      id,
      url,
      imageSource,
      alt: `${title ?? url}의 대표 이미지`,
      elapsedTime: getElapsedTime(createdAt),
      description,
      createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
      favorite,
    };
  };

  return {
    data: data?.map(mapLinks) ?? [],
  };
};
