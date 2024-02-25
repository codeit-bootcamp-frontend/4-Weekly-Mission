import {
  AddToFolder,
  Container,
  Delete,
  KebabButton,
  KebabMenuBox,
} from "./style";
import kebabImg from "../../../images/kebab.svg";
import { useState } from "react";
import DeleteLinkModal from "../../DeleteLinkModal";

const Kebab = ({ url, onClick, kebabOpen }) => {
  const [deleteLinkModalOpen, setDeleteLinkModalOpen] = useState(false);

  const handleClick = () => {
    setDeleteLinkModalOpen(true);
  };

  return (
    <>
      <Container>
        <KebabButton src={kebabImg} onClick={onClick} />
        <KebabMenuBox $kebabopen={kebabOpen.toString()} onClick={onClick}>
          <Delete onClick={handleClick}>삭제하기</Delete>
          <AddToFolder>폴더에 추가</AddToFolder>
        </KebabMenuBox>
      </Container>
      {deleteLinkModalOpen && (
        <DeleteLinkModal
          url={url}
          setDeleteLinkModalOpen={setDeleteLinkModalOpen}
        />
      )}
    </>
  );
};

export default Kebab;
