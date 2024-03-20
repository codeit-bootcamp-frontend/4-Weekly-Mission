import React, { useState, useEffect } from 'react';
import Moment from 'moment';

import { getElapsedTime } from '../../utils/getElapsedTime';
import './Card.css';

export default function Card({ data }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData(data);
  }, [data]);

  return (
    <>
      {!cardData.length ? (
        <p id="mainDefaultText">저장된 링크가 없습니다.</p>
      ) : (
        cardData.map(link => (
          <div key={link.id} className="card">
            <a href={link.url}>
              <img
                className="cardImage"
                src={link.imageSource ? link.imageSource : '/images/noImage.png'}
                alt={link.title}
              />
              <div className="cardTextArea">
                <div className="uploadTime">{getElapsedTime(link.createdAt)}</div>
                <div className="cardText">{link.description}</div>
                <div className="uploadDate">{Moment(link.createdAt).format('YYYY.MM.DD')}</div>
              </div>
            </a>
          </div>
        ))
      )}
    </>
  );
}
