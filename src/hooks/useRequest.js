import { useState } from "react";
import { BASE_URL } from "../utils/constants";

export const useRequest = ({ url, method, body }) => {
  const [data, setData] = useState({});

  const requestFetch = () => {
    fetch(BASE_URL + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error(response.status);
        }
      })
      .then((result) => {
        setData(result);
      });
  };

  return { data, request: () => requestFetch() };
};
