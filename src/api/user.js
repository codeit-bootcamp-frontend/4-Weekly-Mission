import { BASE_API_URL } from "./base";

export const getUser = async () => {
  const response = await fetch(`${BASE_API_URL}/api/sample/user`);

  if (!response.ok) return;
  const data = await response.json();
  return data;
};
