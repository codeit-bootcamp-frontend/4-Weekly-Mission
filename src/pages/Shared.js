import { useState } from "react";
import { getFolderInfo } from "../api/api";
import HeaderElement from "../components/common/HeaderElement";
import FooterElement from "../components/common/FooterElement";
import SharedSection from "../components/shared/SharedSection";
import Input from "../components/common/Input";
import FolderList from "../components/common/FolderList";
import { DeleteModal } from "../components/common/modals/DeleteModal";
import { AddFolderModal } from "../components/common/modals/AddFolderModal";
import { useGetPromise } from "../hooks/uesGetPromise";
import "../styles/shared.css";

function Shared() {
  const foldersData = useGetPromise(getFolderInfo);
  const folders = foldersData?.folder?.links || [];

  const [isModalVisible, setIsModalVisible] = useState(null);

  return (
    <>
      <DeleteModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <AddFolderModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <HeaderElement></HeaderElement>
      <SharedSection></SharedSection>
      <Input />
      <FolderList
        items={folders}
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      ></FolderList>
      <FooterElement></FooterElement>
    </>
  );
}

export default Shared;
