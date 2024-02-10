import { useEffect, useState } from "react";
import { getFolder } from "../../../api";
import { formatDate, getTimeAgo } from "./utils";

export function useCardData() {
  const [cards, setCards] = useState([]);
  const [formattedCards, setFormattedCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardData = await getFolder();
        setCards(cardData);
        const formattedData = cardData.map((card) => ({
          ...card,
          formattedCreatedAt: formatDate(card.createdAt),
          timeAgo: getTimeAgo(card.createdAt),
        }));
        setFormattedCards(formattedData);
      } catch (error) {
        console.error("데이터 가져오기 실패", error);
      }
    };
    fetchData();
  }, []);

  return { cards, formattedCards };
}
