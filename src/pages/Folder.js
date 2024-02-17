import { getAllLinkData, getFolderList } from "./../api/api";

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

  const listsData = useGetJson(getFolderList);
  const lists = listsData?.data || [];

  const initialButtonColors = lists.reduce((colors, list) => {
    colors[list.name] = "#fff";
    return colors;
  }, {});
  return (
    <>
      <GlobalStyle />
      <HeaderElement $positionval="static" />
      <FolderInput />
      <Input />
      <Menus list={lists} initialButtonColors={initialButtonColors} />
      <FolderTitle />
      <FolderList items={folders}></FolderList>
    </>
  );
};

export default Folder;
