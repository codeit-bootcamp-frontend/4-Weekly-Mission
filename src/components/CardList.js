import { useState, useEffect } from 'react';
import Card from './common/Card';
import './CardList.css';

export default function CardList({ cardDataList = [] }) {
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (!document.getElementById('cardList').contains(e.target)) {
        setSelectedCardId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div id="cardList" className="cardList">
      <div className="cardContainer">
        {cardDataList.map(cardData => (
          <Card
            key={cardData.id}
            cardData={cardData}
            selectedCardId={selectedCardId}
            setSelectedCardId={setSelectedCardId}
          />
        ))}
      </div>
    </div>
  );
}
