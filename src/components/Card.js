import { useState, useEffect } from "react";
import { timeCalculate, getDateText } from "../utils/timeCalc";

export function useCardsData() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        const data = await response.json();
        const processedData = data.folder.links.map((link) => ({
          ...link,
          timePassed: timeCalculate(link.createdAt),
          getDate: getDateText(new Date(link.createdAt)),
        }));
        setCardsData(processedData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return cardsData;
}
