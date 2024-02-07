const baseURL = "https://bootcamp-api.codeit.kr";

export const fetchRequest = async (url, method, data) => {
  try {
    const res = await fetch(`${baseURL}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    return res;
  } catch (e) {
    throw Error(e);
  }
};
