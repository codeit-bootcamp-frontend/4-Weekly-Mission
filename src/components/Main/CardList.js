import "./CardList.css";
import defaultCardImg from "../../assets/images/defaultCardImg.svg";
import { getTimeDiff, formatDate } from "../../utils/calculateDate";
import { useCallback, useMemo } from "react";

function Card({ link }) {
  const cardImgStyle = useMemo(() => {
    return {
      borderRadius: "13px 13px 0 0",
      backgroundImage: `url(${
        link.imageSource ? link.imageSource : defaultCardImg
      }`,
    };
  }, [link]);

  const handleClickCard = useCallback(() => {
    window.open(link.url, "_blank");
  }, [link]);

  return (
    <div className="Card" onClick={handleClickCard}>
      <div className="Card-img" style={cardImgStyle}></div>
      <div className="Card-information flex-col ">
        <p className="Card-diffDate">{getTimeDiff(link.createdAt)}</p>
        <p className="Card-description">{link.description}</p>
        <p className="Card-postDate">{formatDate(link.createdAt)}</p>
      </div>
    </div>
  );
}

function CardList({ folder }) {
  return (
    <ul className="CardList flex">
      {folder?.folder?.links?.map((link) => {
        return (
          <li key={link.id}>
            <Card link={link} />
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;
