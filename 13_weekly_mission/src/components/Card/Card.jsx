import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { getElapsedTime } from '../../utils/getElapsedTime';
import './Card.css';

export default function Card({ data }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData(data);
  }, [data]);

  function PopoverMenu() {
    return (
      <div>
        <div>삭제하기</div>
        <div>폴더에 추가</div>
      </div>
    );
  }

  return (
    <>
      {!cardData.length ? (
        <div id="mainDefaultText">저장된 링크가 없습니다.</div>
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
                <div className="uploadTime">
                  <div>{getElapsedTime(link.createdAt)} </div>
                  <div
                    onClick={() => {
                      <PopoverMenu />;
                    }}>
                    <img src={`${process.env.PUBLIC_URL}/images/kebab.png`} alt="팝오버 아이콘" />
                  </div>
                </div>
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
