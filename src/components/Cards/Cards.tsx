import { useState } from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { getTimeAgo } from "../../utils/Utilities";
import Modal from "../modal/Modal";
import starIcon from "../../assets/star.svg";
import checkedStarIcon from "../../assets/checkedstar.svg";
import kebabIcon from "../../assets/kebab.svg";
import noImage from "../../assets/noimage.jpeg";
import css from "./Cards.module.scss";

interface Props {
  cardList: any[];
  showStarKebab?: boolean;
  searchKeyword?: string;
}

function Cards({ cardList, showStarKebab, searchKeyword }: Props) {
  const isListEmpty = cardList.length === 0;

  const [popoverShow, setPopoverShow] = useState(false);
  const [starClick, setStarClick] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectedData, setSelectedData] = useState({ url: "" });

  if (isListEmpty) {
    return (
      <div className={css.noLink}>
        <p>저장된 링크가 없습니다</p>
      </div>
    );
  }

  const cards = cardList.map((card: any) => ({
    imageSource: card.imageSource || card.image_source,
    createdAt: card.createdAt || card.created_at,
    ...card,
  }));

  const filteredCards =
    searchKeyword && searchKeyword.length > 0
      ? cards.filter(
          (data: any) =>
            (data.url || "")
              .toLowerCase()
              .includes(searchKeyword.toLowerCase()) ||
            (data.title || "")
              .toLowerCase()
              .includes(searchKeyword.toLowerCase()) ||
            (data.description || "")
              .toLowerCase()
              .includes(searchKeyword.toLowerCase())
        )
      : cards;

  const handleKebabClick = (e: any, data: any) => {
    e.preventDefault();
    setSelectedData(data);
    setPopoverShow(!popoverShow);
  };

  const handleStarClick = (e: any) => {
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

  console.log(selectedData);

  return (
    <div className={css.Cards}>
      <div className={css.cardItemBox}>
        {filteredCards.map((data: any) => (
          <a
            href={data.url}
            className={css.cardItem}
            key={data.id}
            target="_blank"
          >
            <div className={css.imgBox}>
              <img
                className={css.cardImg}
                src={data.imageSource || noImage}
                alt="링크 대표 이미지"
              />
              {showStarKebab && (
                <button className={css.starBtn} onClick={handleStarClick}>
                  <img
                    src={starClick ? checkedStarIcon : starIcon}
                    alt="star"
                  />
                </button>
              )}
            </div>
            <div className={css.descriptionBox}>
              <div className={css.timeAndKebab}>
                <p className={css.cardTime}>{getTimeAgo(data.createdAt)}</p>
                {showStarKebab && (
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-start"
                    overlay={
                      <Popover>
                        <Button
                          className={css.kebabPopover}
                          onClick={handleModal}
                        >
                          삭제하기
                        </Button>
                        <Button className={css.kebabPopover}>
                          폴더에 추가
                        </Button>
                      </Popover>
                    }
                  >
                    <button
                      className={css.kebabBtn}
                      onClick={(e) => handleKebabClick(e, data)}
                    >
                      <img src={kebabIcon} alt="kebab" />
                    </button>
                  </OverlayTrigger>
                )}
              </div>
              <p className={css.description}>
                {data.title}
                <br />
                {data.description}
              </p>
              <p className={css.cardDate}>
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
