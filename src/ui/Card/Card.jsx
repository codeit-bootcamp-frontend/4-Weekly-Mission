import { useState, useRef, useEffect } from "react";
import "./Card.css";

export const Card = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  favorite,
  handleModalClick,
}) => {
  const [kebabOpen, setKebabOpen] = useState(false);

  const isFolder = typeof favorite !== "undefined";
  const isFavorite = favorite
    ? "images/full-star.svg"
    : "images/empty-star.svg";
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target))
        setKebabOpen && setKebabOpen(false);
    };
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, [setKebabOpen]);

  const handleKebabClick = (e) => {
    e.preventDefault();
    setKebabOpen(true);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="Card">
        <div
          style={{
            backgroundImage: `url(${imageSource ?? "images/card-default.png"})`,
          }}
          className="CardImage"
          alt={alt}
        >
          {favorite !== undefined && (
            <img className="star-button" alt="star" src={isFavorite} />
          )}
        </div>
        <div className="CardContent">
          <div className="CardContent-top">
            <span className="CardContent-elapsed-time">{elapsedTime}</span>
            {isFolder && (
              <button onClick={handleKebabClick}>
                <img className="kebab" src="images/kebab.png" alt="menu" />
              </button>
            )}
            {kebabOpen && (
              <div className="kebabMenu" ref={ref}>
                <button
                  id="deleteLink"
                  className="kebabMenu-button"
                  url={url}
                  onClick={handleModalClick}
                >
                  삭제하기
                </button>
                <button
                  id="addToFolder"
                  className="kebabMenu-button"
                  url={url}
                  onClick={handleModalClick}
                >
                  폴더에 추가
                </button>
              </div>
            )}
          </div>
          <p className="CardContent-description">{description}</p>
          <span className="CardContent-created-at">{createdAt}</span>
        </div>
      </div>
    </a>
  );
};
