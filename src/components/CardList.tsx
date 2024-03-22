import './CardList.css';
import star from '../assets/star.svg';
import kebab from '../assets/kebab.svg';
import transformData from '../utils/transformData';
import KebabPopover from './KebabPopover';
import { useState } from 'react';

interface CardListProps {
  items: Item[];
  searchQuery?: string;
}
interface Item {
  title: string;
  createdAt: Date;
  created_at: Date;
  url: string;
  description: string;
  imageSource: string;
  image_source: string;
}

const Card = ({ item }: { item: Item }) => {
  const { title, url, description, src, timeDifference, formattedDate } =
    transformData(item);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleKebabClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setPopoverVisible(!popoverVisible);
  };

  return (
    <div>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <img src={src} alt='' className='card-box-img' />
        <img src={star} alt='star' className='starIcon' />
        <div className='text-container'>
          <div className='kebabWrapper'>
            <p className='time-difference'>{timeDifference}</p>
            <img
              src={kebab}
              alt='kebab'
              className='kebabIcon'
              onClick={handleKebabClick}
            />
            {popoverVisible && <KebabPopover url={url} />}
          </div>
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
          <p className='date'> {formattedDate}</p>
        </div>
      </a>
    </div>
  );
};

function CardList({ items, searchQuery }: CardListProps) {
  const filteredItems = items.filter(
    (item) =>
      item.title?.toLowerCase().includes((searchQuery ?? '').toLowerCase()) ||
      item.url?.toLowerCase().includes((searchQuery ?? '').toLowerCase()) ||
      item.description
        ?.toLowerCase()
        .includes((searchQuery ?? '').toLowerCase())
  );
  return (
    <div className='card-container-center'>
      <div className='card-container'>
        {filteredItems.map((item) => (
          <div key={item.title} className='card-box'>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
