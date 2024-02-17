import { getFolderInfo } from "./../api/api";
import HeaderElement from "./../components/common/HeaderElement";
import FooterElement from "./../components/common/FooterElement";
import SharedSection from "./../components/shared/SharedSection";
import Input from "../components/common/Input";
import FolderList from "../components/common/FolderList";
import useGetJson from "./../hook/uesGetJson";
import "../style/shared.css";

function Shared() {
  const foldersData = useGetJson(getFolderInfo);
  const folders = foldersData?.folder?.links || [];

  return (
    <>
      <HeaderElement></HeaderElement>
      <SharedSection></SharedSection>
      <Input />
      <FolderList items={folders}></FolderList>
      <FooterElement></FooterElement>
    </>
  );
}

export default Shared;
