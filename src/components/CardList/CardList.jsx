import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import './CardList.css';

export default function CardList() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bootcamp-api.codeit.kr/api/sample/folder');
        setCardData(response.data.folder.links);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main id="mainShared">
      <div className="cardList">
        <Card data={cardData} />
      </div>
    </main>
  );
}
