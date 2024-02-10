import { useEffect, useState } from 'react';
import noImg from '../assets/no-img.png';
import '../style/Card.css';
import { uploadedDuration, uploadedDate } from '../utils/CreatedAtData.js';

function Card() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/folder'
        );
        const jsonData = await response.json();
        const links = jsonData.folder.links.map((link) => ({
          ...link,
          cardTime: uploadedDuration(link.createdAt),
          cardDay: uploadedDate(link.createdAt),
        }));

        setCardData(links);
      } catch (error) {
        console.error('Error data:', error);
      }
    };

    uploadedDuration();
    uploadedDate();

    fetchCardData();
  }, []);

  return (
    <>
      {cardData.map(
        (
          { url, imageSource = noImg, cardTime, description, cardDay },
          index
        ) => (
          <a href={url} className='card' key={index}>
            <img className='card-img' src={imageSource} alt='card' />
            <div className='card-info'>
              <div className='card-time'> {cardTime} </div>
              <p className='card-text'>{description}</p>
              <div className='card-day'>{cardDay} </div>
            </div>
          </a>
        )
      )}
    </>
  );
}

export default Card;
