import { useState, useEffect } from "react";
import { calculateTimePassed, formatDate } from "../utils/dateUtils";

export function useFetchCardsData() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        if (!response.ok) {
          throw new Error("response 전달 실패");
        }
        const data = await response.json();
        setCardsData(
          data.folder.links.map((link) => ({
            ...link,
            timePassed: calculateTimePassed(link.createdAt),
            formattedDate: formatDate(link.createdAt),
          }))
        );
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
  }, []);

  return cardsData;
}
