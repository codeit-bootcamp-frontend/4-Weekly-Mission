import { useEffect, useState } from 'react';
import { uploadedDuration, uploadedDate } from '../../utils/createdAtData.js';
import { HREF } from '../../utils/constants.js';
import noImg from '../../assets/no-img.png';
import starImg from '../../assets/star.png';
import blueStarImg from '../../assets/blue-star.png';
import keebab from '../../assets/kebab.png';
import './Card.css';

const Card = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(`${HREF.BASE_URL}/api/users/1/links`);
        if (!response.ok) {
          throw new Error('Failed to fetch card data');
        }
        const jsonData = await response.json();
        const links = jsonData.data.map((link) => ({
          ...link,
          cardTime: uploadedDuration(link.created_at),
          cardDay: uploadedDate(link.created_at),
        }));
        setCardData(links);
      } catch (error) {
        console.error('Error data:', error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <>
      {cardData.map(
        ({ id, url, image_source, cardTime, description, cardDay }) => (
          <a href={url} className='card' key={id}>
            <div className='card-container'>
              <img
                className='star-icon'
                src={image_source ? starImg : blueStarImg}
                alt='star'
              />
              <img
                className='card-img'
                src={image_source || noImg}
                alt='card'
              />
            </div>
            <div className='card-info'>
              <div className='kebab-tag'>
                <div className='card-time'>{cardTime}</div>
                <img className='kebab' src={keebab} alt='kebab' />
              </div>
              <p className='card-text'>{description}</p>
              <div className='card-day'>{cardDay}</div>
            </div>
          </a>
        )
      )}
    </>
  );
};

export default Card;
