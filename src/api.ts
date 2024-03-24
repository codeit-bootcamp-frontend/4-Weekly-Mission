import { Link, LinkBase } from '@src/pages/Folder/FolderPage';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getFolder() {
  try {
    const response = await fetch(`${BASE_URL}/sample/folder`);
    if (!response.ok) {
      throw new Error('폴더를 불러오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUser(userId: number) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error('유저를 불러오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getFolders(userId: number) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}/folders`);
    if (!response.ok) {
      throw new Error('폴더 목록을 불러오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getLinks(userId: number, folderId: number) {
  const query = `${folderId && 'folderId=' + folderId}`;
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}/links?${query}`);
    if (!response.ok) {
      throw new Error('링크 목록을 불러오는데 실패했습니다.');
    }
    const links = await response.json();
    const data = links.data?.map((link: LinkBase) => {
      const { created_at, updated_at, image_source, folder_id } = link;
      const revertLink: Link = {
        ...link,
        createdAt: created_at,
        updatedAt: updated_at,
        imageSource: image_source,
        folderId: folder_id,
      };
      return revertLink;
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
