import format from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

export const mapFolderData = (folder) => {
  if (!folder) return [];
  const { name, owner, data, links, folder_id } = folder;

  const mapLinks = (data) => {
    if (!links) {
      const {
        id,
        name,
        created_at,
        url,
        image_source,
        folder_id,
        title,
        description,
      } = data;
      return {
        id,
        url,
        name,
        imageSource: image_source,
        folder_id,
        alt: `${title ?? url}의 대표 이미지`,
        elapsedTime: getElapsedTime(created_at),
        description,
        createdAt: format(new Date(created_at), "yyyy. MM. dd"),
      };
    } else {
      const { id, createdAt, url, imageSource, title, description } = data;
      return {
        id,
        url,
        imageSource,
        alt: `${title ?? url}의 대표 이미지`,
        elapsedTime: getElapsedTime(createdAt),
        description,
        createdAt: format(new Date(), "yyyy. MM. dd"),
      };
    }
  };
  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    pageName: name,
    folderId: folder_id,
    links: (data || links)?.map(mapLinks) ?? [],
    tagData_links: (data || links)?.map(mapLinks) ?? [],
  };
};
