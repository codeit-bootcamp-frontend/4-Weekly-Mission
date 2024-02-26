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
import AddToFolderModal from "../../AddToFolderModal";

const Kebab = ({ folders, url, onClick, kebabOpen }) => {
  const [deleteLinkModalOpen, setDeleteLinkModalOpen] = useState(false);
  const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);

  const handleClick = (e) => {
    if (e.target.id === "delete") setDeleteLinkModalOpen(true);
    if (e.target.id === "addToFolder") setAddToFolderModalOpen(true);
  };

  return (
    <>
      <Container>
        <KebabButton src={kebabImg} onClick={onClick} />
        <KebabMenuBox $kebabopen={kebabOpen.toString()} onClick={onClick}>
          <Delete id="delete" onClick={handleClick}>
            삭제하기
          </Delete>
          <AddToFolder id="addToFolder" onClick={handleClick}>
            폴더에 추가
          </AddToFolder>
        </KebabMenuBox>
      </Container>
      {deleteLinkModalOpen && (
        <DeleteLinkModal
          url={url}
          setDeleteLinkModalOpen={setDeleteLinkModalOpen}
        />
      )}
      {addToFolderModalOpen && (
        <AddToFolderModal
          link={url}
          setAddToFolderModalOpen={setAddToFolderModalOpen}
          folders={folders}
        />
      )}
    </>
  );
};

export default Kebab;
