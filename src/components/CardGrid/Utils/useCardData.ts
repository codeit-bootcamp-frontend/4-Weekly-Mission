import { useEffect, useState } from "react";
import { getFolder } from "../../../api";
import { formatDate, getTimeAgo } from "./utils";
import { Link } from "../../../types/interface";

export function useCardData() {
  const [cards, setCards] = useState<Link[]>([]);
  const [formattedCards, setFormattedCards] = useState<Link[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFolder();
        const cardData = response.folder.links;
        setCards(cardData);
        const formattedData = cardData.map((card) => ({
          ...card,
          formattedCreatedAt: formatDate(card.createdAt),
          timeAgo: getTimeAgo(card.createdAt),
        }));
        setFormattedCards(formattedData);
      } catch (error) {
        console.error("폴더 데이터 불러오기 실패: ", error);
      }
    };
    fetchData();
  }, []);

  return { formattedCards };
}

export default useCardData;
