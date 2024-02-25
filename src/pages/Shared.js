import { useState } from "react";
import { getFolderInfo } from "./../api/api";
import HeaderElement from "./../components/common/HeaderElement";
import FooterElement from "./../components/common/FooterElement";
import SharedSection from "./../components/shared/SharedSection";
import Input from "../components/common/Input";
import FolderList from "../components/common/FolderList";
import useGetJson from "./../hooks/uesGetJson";
import "../styles/shared.css";
import { SharedModal } from "components/common/modals/SharedModal";
import { EditNameModal } from "components/common/modals/EditNameModal";
import { DeleteModal } from "components/common/modals/DeleteModal";
import { AddFolderModal } from "components/common/modals/AddFolderModal";

function Shared() {
  const foldersData = useGetJson(getFolderInfo);
  const folders = foldersData?.folder?.links || [];

  const [isModal, setIsModal] = useState(null);

  return (
    <>
      <SharedModal $isVisible={isModal} setIsVisible={setIsModal} />
      <EditNameModal $isVisible={isModal} setIsVisible={setIsModal} />
      <DeleteModal $isVisible={isModal} setIsVisible={setIsModal} />
      <AddFolderModal $isVisible={isModal} setIsVisible={setIsModal} />
      <HeaderElement></HeaderElement>
      <SharedSection></SharedSection>
      <Input />
      <FolderList
        items={folders}
        $isVisible={isModal}
        setIsVisible={setIsModal}
      ></FolderList>
      <FooterElement></FooterElement>
    </>
  );
}

export default Shared;
