import { useEffect, useState } from "react";

const Card = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const data = await response.json();
        setCardData(data);
      } catch (err) {
        console.log("Error fetching folder data: ", err);
      }
    };

    fetchCardData();
  }, []);

  if (!cardData) {
    return null;
  }

  return (
    <div>
      <div>{Card}</div>
    </div>
  );
};

export default Card;
