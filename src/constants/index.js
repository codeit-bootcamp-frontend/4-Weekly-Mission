const BASE_URL = "https://bootcamp-api.codeit.kr/api/";
const ID = 11;

const sharedLinks = `${BASE_URL}sample/folder`;
const folders = `${BASE_URL}users/${ID}/folders`;
const links = `${BASE_URL}users/${ID}/links`;
const user = `${BASE_URL}users/1`;

export const END_POINT = {
  folders,
  links,
  user,
  sharedLinks,
};
