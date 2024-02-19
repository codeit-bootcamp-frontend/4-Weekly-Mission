import { BASE_API_URL } from "./base";

export const getSampleUser = async () => {
  const response = await fetch(`${BASE_API_URL}/api/users/1`);

  if (!response.ok) return;
  const data = await response.json();
  return data;
};
