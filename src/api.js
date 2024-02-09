import { BASE_URL } from "./constant";

export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/sample/user`);
  return response.json();
};

export const getFolder = async () => {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  return response.json();
};
