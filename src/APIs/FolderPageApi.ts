const BASE_API = "https://bootcamp-api.codeit.kr/api";

export type Profile = {
  email: string;
  image: string;
};
export const getUserData = async (): Promise<Profile | undefined> => {
  try {
    const response = await fetch(`${BASE_API}/users/1`);
    const result = await response.json();

    return {
      email: result.data[0].email,
      image: result.data[0].image_source,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getFolderName = async () => {
  try {
    const response = await fetch(`${BASE_API}/users/1/folders`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getFolderById = async (id?: number) => {
  const response = await fetch(
    `${BASE_API}/users/1/links${id ? `?folderId=${id}` : ""}`
  );
  const result = await response.json();
  return result;
};
