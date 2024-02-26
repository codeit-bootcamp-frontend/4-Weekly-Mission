import { useEffect, useState } from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { getTimeAgo } from "./Utilities";
import Modal from "./modal/Modal";
import starIcon from "../assets/star.svg";
import checkedStarIcon from "../assets/checkedstar.svg";
import kebabIcon from "../assets/kebab.svg";
import noImage from "../assets/noimage.jpeg";
import "./styles/Cards.css";

function Cards({ cardList, showStarKebab }) {
  const isListEmpty = cardList.length === 0;

  const [popoverShow, setPopoverShow] = useState(false);
  const [starClick, setStarClick] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  if (isListEmpty) {
    return (
      <div className="noLink">
        <p>저장된 링크가 없습니다</p>
      </div>
    );
  }

  const cards = cardList.map((card) => ({
    imageSource: card.imageSource || card.image_source,
    createdAt: card.createdAt || card.created_at,
    ...card,
  }));

  const handleKebabClick = (e, data) => {
    e.preventDefault();
    setSelectedData(data);
    setPopoverShow(!popoverShow);
  };

  const handleStarClick = (e) => {
    e.preventDefault();
    setStarClick(!starClick);
  };

  const handleModal = () => {
    setDeleteModalShow(!deleteModalShow);

    if (!deleteModalShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="Cards">
      <div className="cardItemBox">
        {cards.map((data) => (
          <a href={data.url} className="cardItem" key={data.id} target="_blank">
            <div className="imgBox">
              <img
                className="cardImg"
                src={data.imageSource || noImage}
                alt="링크 대표 이미지"
              />
              {showStarKebab && (
                <button className="starBtn" onClick={handleStarClick}>
                  <img src={starClick ? checkedStarIcon : starIcon} />
                </button>
              )}
            </div>
            <div className="descriptionBox">
              <div className="timeAndKebab">
                <p className="cardTime">{getTimeAgo(data.createdAt)}</p>
                {showStarKebab && (
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-start"
                    overlay={
                      <Popover>
                        <Button className="kebabPopover" onClick={handleModal}>
                          삭제하기
                        </Button>
                        <Button className="kebabPopover">폴더에 추가</Button>
                      </Popover>
                    }
                  >
                    <button
                      className="kebabBtn"
                      onClick={(e) => handleKebabClick(e, data)}
                    >
                      <img src={kebabIcon} />
                    </button>
                  </OverlayTrigger>
                )}
              </div>
              <p className="description">
                {data.title}
                <br />
                {data.description}
              </p>
              <p className="cardDate">
                {new Date(data.createdAt).toLocaleDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
      {deleteModalShow && (
        <Modal
          onClose={handleModal}
          title={"링크 삭제"}
          data={selectedData.url}
          hasInput={false}
          hasBtn={true}
          btnTitle={"삭제하기"}
        />
      )}
    </div>
  );
}

export default Cards;
