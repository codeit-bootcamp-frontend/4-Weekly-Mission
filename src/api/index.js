export const BASE_URL = process.env.REACT_APP_BASE_URL

const USER_ID = 4

export const GET_SHARE_API = `${BASE_URL}/sample/folder`

export const GET_PROFILE_API = `${BASE_URL}/users/${USER_ID}`

export const GET_LINK_API = `${BASE_URL}/users/${USER_ID}/links`

export const GET_FOLDER_API = `${BASE_URL}/users/${USER_ID}/folders`

export const GET_FOLDER_BY_ID = (folderId) => `${BASE_URL}/users/${USER_ID}/links?folderId=${folderId}`
