import { useAsync } from "../../utils/useAsync";
import { axiosInstance } from "../../utils/axiosInstance";
import { getElapsedTime } from "../../utils/getElapsedTime";

const mapFolderData = (folder) => {
  if (!folder) return [];
  const { name, owner, links } = folder;
  const mapLinks = (link) => {
    const { id, createdAt, url, imageSource, title, description } = link;

    // 날짜 형식: "yyyy. MM. dd"
    // 나중에 format 쓰기
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}. ${month}. ${day}`;
    };

    return {
      id,
      url,
      imageSource,
      alt: `${title ?? url}의 대표 이미지`,
      elapsedTime: getElapsedTime(createdAt),
      description,
      createdAt: formatDate(createdAt),
    };
  };

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinks) ?? [],
  };
};

export const useGetFolder = () => {
  const getUser = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getUser);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};


export const useGetUser = () => {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};

