import { BASE_URL } from "./constants.js";

export const getRequestApi = () => {};

export const postReqeustApi = (url, body) => {
  return fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw Error(response.status);
    }
  });
};
