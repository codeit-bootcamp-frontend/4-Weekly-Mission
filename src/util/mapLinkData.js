import format from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

export const mapLinkData = (data) => {
  if (!data) return [];
  // const { name, owner, data } = folder;
  const mapFolderNames = (link) => {
    const { id, created_at, url, title, description, image_source } = link;
    return {
      id,
      url,
      image_source,
      alt: `${title ?? url}의 대표 이미지`,
      elapsedTime: getElapsedTime(created_at),
      description,
      created_at: format(new Date(created_at), "yyyy. MM. dd"),
    };
  };

  return {
    links: data?.map(mapFolderNames) ?? []
  };
  

  // const mapLinks = (link) => {
  //   const { id, createdAt, url, imageSource, title, description } = link;
  //   return {
  //     id,
  //     url,
  //     imageSource,
  //     alt: `${title ?? url}의 대표 이미지`,
  //     elapsedTime: getElapsedTime(createdAt),
  //     description,
  //     createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
  //   };
  // };

  // return {
  //   profileImage: owner?.profileImageSource,
  //   ownerName: owner?.name,
  //   folderName: name,
  //   links: data?.map(mapLinks) ?? [],
  // };
  return;
};

// {
//   "id":192,
//   "created_at":"2023-06-30T08:07:41.588529+00:00",
//   "updated_at":null,
//   "url":"https://bootcamp-api.codeit.kr/docs",
//   "title":null,
//   "description":null,
//   "image_source":null,
//   "folder_id":null
//   }
