import { BASE_URL } from "./BASE_URL";

export async function useGetFolder<T>(): Promise<T> {
  const response = await fetch(`${BASE_URL}sample/folder`);
  const result = await response.json();

  return result;
}
