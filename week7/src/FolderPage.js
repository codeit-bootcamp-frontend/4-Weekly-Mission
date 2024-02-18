import { useEffect, useState } from "react";
import "./App.css";
import FolderHeader from "./components/FolderPage/FolderHeader.js";
import Input from "./components/Input.js";
import FolderCard from "./components/FolderPage/FolderCard.js";
import Footer from "./components/Footer.js";
import useFetch from "../src/hooks/useFetch.js";
import SortedMenus from "./components/FolderPage/SortedMenus.js";
import { useMediaQuery } from "react-responsive";
export const ALL_MENU_URL = "https://bootcamp-api.codeit.kr/api/users/1/links";

function FolderPage() {
  const isTablet = useMediaQuery({ maxWidth: 1124 });
  const [folderName, setFolderName] = useState("");
  const [allMenuId, setAllMenuId] = useState([]);
  const [subUrl, setSubUrl] = useState(``);

  const userUrl = "https://bootcamp-api.codeit.kr/api/users/1";

  const SortedAllMenusUrl =
    "https://bootcamp-api.codeit.kr/api/users/1/folders";

  const { data: userData } = useFetch(userUrl);
  const { data: sortedAllMenusData } = useFetch(SortedAllMenusUrl);
  const { data: folderData } = useFetch(subUrl);

  const { data: AllMenuData } = useFetch(ALL_MENU_URL);
  const handleGetFolderId = (id) => {
    setAllMenuId(() => id);
  };
  const handleChangeUrl = (url) => {
    setSubUrl(url);
    return;
  };

  const handlePrintFolderName = (name) => {
    setFolderName(name);
  };

  useEffect(() => {}, [subUrl, folderData, sortedAllMenusData]);

  return (
    <div className="App">
      <FolderHeader
        user={userData}
        imageSource={userData?.data[0]?.image_source}
        email={userData?.data[0]?.email}
      />
      <Input />
      <SortedMenus
        menusData={sortedAllMenusData?.data}
        onClickSubMenu={handleGetFolderId}
        allMenuData={AllMenuData?.data}
        onChangeUrl={handleChangeUrl}
        onChangeTitle={handlePrintFolderName}
      />
      <h2 className={isTablet ? "title-tablet" : "title"}>{folderName}</h2>
      <FolderCard data={folderData?.data} allMenuId={allMenuId} />
      <Footer />
    </div>
  );
}

export default FolderPage;
