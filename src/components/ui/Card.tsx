import React, { useState } from "react";
import styled from "styled-components";
import { formatDate, formatDateAgo } from "../../utils/DateUtils";
import { useModal } from "../../hooks/useModal";
import ModalContainer from "../common/Modal/Modal";
import * as Modal from "../common/Modal/Modal";
import ModalFoderList from "components/common/Modal/ModalFoderList";
import { LinkType } from "interface/Type";

const Card = styled.div`
  width: 340px;
  height: 334px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: Pretendard;
`;

const ImageBox = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Star = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Kebab = styled.img`
  cursor: pointer;
`;

const Main = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Popover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  position: absolute;
  top: 20px;
  right: -10px;
`;

const Pop = styled.div`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  gap: 10px;
  color: var(--gray-light-gray-100, #333236);
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: var(--primary-color, #6d6afe);
    background: var(--Linkbrary-gray10, #e7effb);
  }
`;

const CardContent = styled.div`
  min-height: 50px;
`;

const CardFooter = styled.div``;

const CreatedAt = styled.p`
  color: #666;
  font-size: 13px;
  font-weight: 400;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const Time = styled.p`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
`;

interface CardItem {
  cardData: LinkType;
}

function CardItem({ cardData }: CardItem) {
  const {
    created_at: createdAt,
    description,
    image_source,
    url,
  } = cardData;

  const cardDate = formatDate(createdAt);
  const cardCreatedAt = formatDateAgo(createdAt);

  const { openModal, handleModalOpen, handleModalClose } = useModal();

  const [isPopover, setIsPopover] = useState(false);
  const [option, setOption] = useState("");

  const popoverHandler = () => {
    setIsPopover(prev => !prev);
  };

  return (
    <>
      {openModal && option === "삭제" && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>링크 삭제</Modal.Title>
          <Modal.SubTitle>{url}</Modal.SubTitle>
          <Modal.RedButton>삭제하기</Modal.RedButton>
        </ModalContainer>
      )}
      {openModal && option === "추가" && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더의 추가</Modal.Title>
          <Modal.SubTitle>{url}</Modal.SubTitle>
          <ModalFoderList />
          <Modal.BlueButton>추가하기</Modal.BlueButton>
        </ModalContainer>
      )}
      <Card>
        <ImageBox>
          <Image
            src={image_source || `/Images/default.png`}
            alt="card_Image"
          />
          <Star src="/Icons/star.svg" alt="star" />
        </ImageBox>
        <Main>
          <CardHeader>
            <CreatedAt>{cardDate}</CreatedAt>
            <Kebab
              src="/Icons/kebab.png"
              alt="kebab"
              onClick={popoverHandler}
            />
            {isPopover && (
              <Popover>
                <Pop
                  onClick={() => {
                    setOption("삭제");
                    handleModalOpen();
                  }}
                >
                  삭제하기
                </Pop>
                <Pop
                  onClick={() => {
                    setOption("추가");
                    handleModalOpen();
                  }}
                >
                  폴더의 추가
                </Pop>
              </Popover>
            )}
          </CardHeader>
          <CardContent>
            <Description>{description}</Description>
          </CardContent>
          <CardFooter>
            <Time>{cardCreatedAt}</Time>
          </CardFooter>
        </Main>
      </Card>
    </>
  );
}

export default CardItem;
