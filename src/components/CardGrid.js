import { useEffect, useState } from 'react';
import { uploadedDuration, uploadedDate } from '../utils/createdAtData';
import noImg from '../assets/no-img.png';
import starImg from '../assets/star.png';
import blueStarImg from '../assets/blue-star.png';
import kebabImg from '../assets/kebab.png';
import { LINK_URL } from '../utils/constants';
import SelectMenu from '../components/SelectMenu';
import './Card.css';
import './CardGrid.css';

const Card = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopOver, setShowPopOver] = useState(false);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(
          `${LINK_URL.BASE_API_URL}/api/sample/folder`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        const links = jsonData.folder.links.map((link) => ({
          ...link,
          cardTime: uploadedDuration(link.createdAt),
          cardDay: uploadedDate(link.createdAt),
        }));
        setCardData(links);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleKebabClick = (e, kebabId) => {
    e.preventDefault();
    setShowPopOver(showPopOver === kebabId ? false : kebabId);
  };

  return (
    <div className='card-grid'>
      {cardData.map(
        ({ id, url, imageSource, cardTime, description, cardDay }) => (
          <a
            href={url}
            className='card'
            key={id}
            target='_blank'
            rel='noreferrer'
          >
            <div className='card-container'>
              <img
                className='star-icon'
                src={imageSource ? starImg : blueStarImg}
                alt='star'
              />
              <img className='card-img' src={imageSource || noImg} alt='card' />
            </div>
            <div className='card-info'>
              <div className='kebab-tag'>
                <div className='card-time'>{cardTime}</div>
                <img
                  className='kebab'
                  src={kebabImg}
                  alt='kebab'
                  data-kebab-id={id}
                  onClick={(e) => handleKebabClick(e, id)}
                />
                {showPopOver === id && <SelectMenu folderLink={url} />}
              </div>
              <p className='card-text'>{description}</p>
              <div className='card-day'>{cardDay}</div>
            </div>
          </a>
        )
      )}
    </div>
  );
};

export default Card;
