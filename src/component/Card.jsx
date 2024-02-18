import React from "react";
import "../css/Card.css";
import noImg from "../imgs/noImg.svg";
import star from "../imgs/star.svg";

function Card({ description, imageSource, createdAt, url }) {
  const handleCardClick = () => {
    window.open(url, "_blank"); // URL을 새 창으로 열기
  };

  const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR");

  // createdAt 데이터를 기준으로 ago 문자열을 생성하는 함수
  const getAgoString = (createdAt) => {
    const now = new Date(); //현재 날짜
    const diffMs = now - new Date(createdAt); //현재날짜와 card 날짜의 차이

    // ms를 분으로 변환
    const diffMin = Math.floor(diffMs / 60000);

    // 분 단위로 처리
    if (diffMin < 2) {
      return "1 minute ago";
    } else if (diffMin <= 59) {
      return `${diffMin} minutes ago`;
    }

    // 시간 단위로 처리
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) {
      return diffHr === 1 ? "1 hour ago" : `${diffHr} hours ago`;
    }

    // 일 단위로 처리
    const diffDay = Math.floor(diffHr / 24);
    if (diffDay < 31) {
      return diffDay === 1 ? "1 day ago" : `${diffDay} days ago`;
    }

    // 달 단위로 처리
    const diffMonth = Math.floor(diffDay / 30);
    if (diffMonth < 12) {
      return diffMonth === 1 ? "1 month ago" : `${diffMonth} months ago`;
    }

    // 연 단위로 처리
    const diffYear = Math.floor(diffMonth / 12);
    return diffYear === 1 ? "1 year ago" : `${diffYear} years ago`;
  };

  // createdAt 데이터를 기준으로 ago 문자열을 생성
  const agoString = getAgoString(createdAt);

  return (
    <div className="card" onClick={handleCardClick}>
      <img className="card--img" src={imageSource || noImg} alt="cardImg" />
      <div className="card--content">
        <p className="card--content__agotime">{agoString}</p>
        <p className="card--content__description">{description}</p>
        <p className="card--content__date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default Card;
