import { mapLinksData } from "link/util-map";
interface FolderDataType {
  name: string;
  owner: { id: number; name: string; profileImageSource: string };
  links: any; //fixme
  //https://bootcamp-api.codeit.kr/api/sample/folder
}

export const mapFolderData = (folder: FolderDataType) => {
  if (!folder) return [];

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData) ?? [],
  };
};
