import { useState, useRef, useEffect, MouseEvent, RefObject } from "react";
import "./Card.css";

interface Prop {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
  favorite?: boolean;
  handleModalClick?: any;
}

export const Card = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  favorite,
  handleModalClick,
}: Prop) => {
  const [kebabOpen, setKebabOpen] = useState(false);

  const isFolder = typeof favorite !== "undefined";
  const isFavorite = favorite
    ? "images/full-star.svg"
    : "images/empty-star.svg";
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  // TODO
  // addEventListner issue

  useEffect(() => {
    const handleOutsideClick: EventListener = (ev: Event) => {
      const target = ev.target;
      if (ref.current!.contains(target as Node))
        setKebabOpen && setKebabOpen(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [setKebabOpen]);

  const handleKebabClick = (e: MouseEvent) => {
    e.preventDefault();
    setKebabOpen(true);
  };

  const handleButtonClick = () => {
    handleModalClick(url);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="Card">
        <div
          style={{
            backgroundImage: `url(${imageSource ?? "images/card-default.png"})`,
          }}
          className="CardImage"
          // alt={alt}
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
                  onClick={handleButtonClick}
                >
                  삭제하기
                </button>
                <button
                  id="addToFolder"
                  className="kebabMenu-button"
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
