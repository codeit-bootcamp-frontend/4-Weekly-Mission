import { Folder, FolderInfo, Link, User } from "@types";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getSampleUser(): Promise<User> {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error("사용자 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getUser({ userId }: { userId: number }): Promise<User> {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error("사용자 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body.data[0];
}

export async function getFolderInfo(): Promise<{ folder: FolderInfo }> {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolderList({
  userId,
}: {
  userId: number;
}): Promise<{ data: Folder[] }> {
  const response = await fetch(`${BASE_URL}/users/${userId}/folders`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getLinks({
  userId,
  folderId,
}: {
  userId: number;
  folderId: number | null;
}): Promise<{ data: Link[] }> {
  const query = folderId ? `?folderId=${folderId}` : "";

  const response = await fetch(`${BASE_URL}/users/${userId}/links${query}`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
