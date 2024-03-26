import format from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

interface Folder {
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: {}[];
}

interface Link {
  id: number;
  createdAt: string;
  url: string;
  imageSource: string;
  title: string;
  description: string;
}

export const mapFolderData = (folder: Folder) => {
  if (!folder) return {};
  const { name, owner, links } = folder;

  const mapLinks = (link: Link) => {
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

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinks) ?? [],
  };
};
