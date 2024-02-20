import format from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

export const mapFolderFromLink = (data) => {
  if (!data) return [];

  const mapLinks = (link) => {
    const {
      id,
      created_at: createdAt,
      url,
      image_source: imageSource,
      title,
      description,
    } = link;

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

  return {
    data: data?.map(mapLinks) ?? [],
  };
};
