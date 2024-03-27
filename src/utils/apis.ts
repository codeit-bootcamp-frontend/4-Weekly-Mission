export const getUserURL = (userId: number) => `users/${userId}`;

export const getUserFolderURL = (userId: number, folderId: number | string) =>
  `users/${userId}/links?folderId=${folderId}`;

export const getUserFoldersURL = (userID: number) => `users/${userID}/folders`;

export const getFolderURL = 'sample/folder';
