import { BASE_URL, USER_ID } from "api"

export const GET_FOLDER_API = `${BASE_URL}/users/${USER_ID}/folders`

export const GET_LINK_API = `${BASE_URL}/users/${USER_ID}/links`

export const GET_FOLDER_BY_ID = (folderId) => `${BASE_URL}/users/${USER_ID}/links?folderId=${folderId}`
