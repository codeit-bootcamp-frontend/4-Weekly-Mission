import { BASE_API_URL } from "./base";

export const getSampleFolder = async () => {
  const response = await fetch(`${BASE_API_URL}/api/sample/folder`);

  if (!response.ok) return;
  const data = await response.json();
  return data;
};
