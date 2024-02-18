import format from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

export const mapFolderData = (folder) => {
  if (!folder) return [];
  const { name, owner, data } = folder;

  const mapLinks = (data) => {
    const { id, created_at, url, image_source, title, description } = data;
    return {
      id,
      url,
      imageSource: image_source,
      alt: `${title ?? url}의 대표 이미지`,
      elapsedTime: getElapsedTime(created_at),
      description,
      createdAt: format(new Date(created_at), "yyyy. MM. dd"),
    };
  };

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    pageName: name,
    links: data?.map(mapLinks) ?? [],
  };
};
