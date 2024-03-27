import { getElapsedTime } from "./getElapsedTime";
import { formatData } from "./formatDate";
import { FolderPageDataForm, LinkDataForm } from "interface/DataForm";

export const getFormattedFolders = (folder: FolderPageDataForm) => {
  const { name, owner, links } = folder;

  const mapLinks = (link: LinkDataForm) => {
    const { id, createdAt, url, imageSource, title, description } = link;
    return {
      id,
      url,
      imageSource,
      alt: `${title ?? url}의 대표 이미지`,
      elapsedTime: getElapsedTime(createdAt),
      description,
      createdAt: formatData(createdAt),
    };
  };

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinks) ?? [],
  };
};
