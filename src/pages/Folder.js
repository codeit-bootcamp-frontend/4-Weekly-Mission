import { getAllLinkData } from "./../api/api";

import HeaderElement from "./../components/common/HeaderElement";
import GlobalStyle from "./../components/common/GlobalStyle";
import FolderInput from "./../components/Folder/FolderInput";
import FolderList from "./../components/common/FolderList";
import Input from "../components/common/Input";
import Menus from "../components/Folder/Menus";
import FolderTitle from "../components/Folder/FolderTitle";

import useGetJson from "./../hook/uesGetJson";

const Folder = () => {
  const foldersData = useGetJson(getAllLinkData);
  const folders = foldersData?.data || [];

  return (
    <>
      <GlobalStyle />
      <HeaderElement $positionval={"static"} />
      <FolderInput />
      <Input />
      <Menus />
      <FolderTitle />
      <FolderList items={folders}></FolderList>
    </>
  );
};

export default Folder;
