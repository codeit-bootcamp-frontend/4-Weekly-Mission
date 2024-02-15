import { useEffect, useState } from "react";

export function useFetch(baseUrl) {
  const [userData, setUserData] = useState(null);

  const fetchUrl = () => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => setUserData(res));
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return {
    userData,
  };
}
