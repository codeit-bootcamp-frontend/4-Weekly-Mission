import styled from "styled-components";
import modalCloseIcon from "../../images/cancel-icon.png";
import "../../colors.css";
import { useState } from "react";
import checkImg from "../../images/check.png";

function AddModal({ purpose, url, handleModalOff, folderListData }) {
  const [checkOn, setCheckOn] = useState(null);
  let buttonText = "";
  let message = "";
  if ((purpose = "폴더에 추가")) {
    buttonText = "추가하기";
    message = url;
  }

  return (
    <ModalContainer onClick={handleModalOff}>
      <ModalForm
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Name>{purpose}</Name>
        <CloseButton onClick={handleModalOff}>
          <img src={modalCloseIcon} alt="closeButton" />
        </CloseButton>
        <Message>{message}</Message>
        <FolderListScroll>
          {folderListData.map((data) => {
            return (
              <FolderListScrollItem
                key={data.id}
                onClick={(e) => {
                  e.preventDefault();
                }}
                onFocus={() => {
                  setCheckOn(data.id);
                }}
              >
                <FolderListScrollItemName>{data.name}</FolderListScrollItemName>
                <FolderListScrollItemCount>{`${data.link.count}개 링크`}</FolderListScrollItemCount>
                {data.id === checkOn && <CheckImg src={checkImg} />}
              </FolderListScrollItem>
            );
          })}
        </FolderListScroll>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {buttonText}
        </Button>
      </ModalForm>
    </ModalContainer>
  );
}

const CheckImg = styled.img`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 10px;
  right: 8px;
`;

const FolderListScrollItemName = styled.span`
  font-size: 16px;
`;

const FolderListScrollItemCount = styled.span`
  color: #9fa6b2;
  font-size: 14px;
`;

const FolderListScrollItem = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: white;
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  gap: 8px;
  padding: 8px;
  &:focus,
  &:hover {
    background-color: #f0f6ff;
    color: var(--primary);
  }
`;

const FolderListScroll = styled.div`
  width: 280px;
  height: 172px;
  overflow: auto;
  margin: 24px 0 24px 0;
`;

const Button = styled.button`
  width: 280px;
  height: 51px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  border-radius: 8px;
  color: #f5f5f5;
  border: none;
  margin: 0 0 32px 0;
  font-size: 16px;
  height: 51px;
`;
const ModalForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid var(--gray20, #ccd5e3);
  background: var(--white, #fff);
  width: 360px;
  height: 389px;
`;
const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

const Name = styled.p`
  color: var(--gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 32px 0 8px 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  cursor: pointer;
  background-color: white;
`;

const Message = styled.p`
  color: var(--gray60);
  font-size: 14px;
`;
export default AddModal;
