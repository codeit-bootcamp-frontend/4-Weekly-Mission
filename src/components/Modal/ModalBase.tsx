import { useContext } from "react";
import styled from "styled-components";
import closeBtn from "../../assets/svg/close.svg";
import { FolderNameContext } from "../folder/FolderInfo";
import { CardLinkContext } from "../shared/Card";
import FolderAddList from "./FolderAddList";
import ShareLists from "./ShareSnsList";

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px 40px;
  border-radius: 15px;
  z-index: 9999;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModalButton = styled.button<{ $btntext?: string }>`
  cursor: pointer;
  border: none;
  color: var(--white);
  font-size: 18px;
  width: 100%;
  height: 53px;
  padding: 16px 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  background: ${({ $btntext }) =>
    $btntext === "삭제하기"
      ? "var(--red)"
      : "var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));"};
`;

const ModalInfo = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
  text-align: center;
  font-size: 14px;
  color: var(--gray2);
  margin: -15px 0 10px;
`;

interface Props {
  children?: React.ReactNode;
  title: string;
  isClose: () => void;
  btntext?: string;
  addLink?: string;
}

const ModalBase = ({ children, title, isClose, btntext, addLink }: Props) => {
  const folderContextValue = useContext(FolderNameContext);
  const cardContextValue = useContext(CardLinkContext);
  let info;

  if (folderContextValue) {
    info = folderContextValue.folderName;
  } else if (cardContextValue) {
    info = cardContextValue.url;
  } else {
    info = addLink;
  }

  return (
    <Container>
      <CloseButton onClick={isClose}>
        <img src={closeBtn} alt="" />
      </CloseButton>
      <ModalTitle>{title}</ModalTitle>
      {children || <ModalInfo>{info}</ModalInfo>}
      {title === "폴더에 추가" && <FolderAddList />}
      {btntext ? (
        <ModalButton $btntext={btntext}>{btntext}</ModalButton>
      ) : (
        <ShareLists />
      )}
    </Container>
  );
};

export default ModalBase;
