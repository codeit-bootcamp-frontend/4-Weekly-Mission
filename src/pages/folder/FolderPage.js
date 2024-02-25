import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserInfo, getUserFolders, getButtonList } from "../../api/api";

import "./FolderPage.css";
import Gnb from "../../components/Gnb";
import AddLinkBar from "../../components/AddLinkBar";
import SearchBar from "../../components/SearchBar";
import CardsArea from "../../components/CardsArea";
import Footer from "../../components/Footer";
import add_icon from "../../assets/svg/add.svg";
import pen_icon from "../../assets/svg/pen.svg";
import share_icon from "../../assets/svg/share.svg";
import delete_icon from "../../assets/svg/delete.svg";

function FolderPage() {
  const [userData, setuserData] = useState([]);
  const [foldersData, setFoldersData] = useState([]);
  const [buttonData, setButtonData] = useState([]);
  const [folderTitle, setFolderTitle] = useState("전체");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const result = await getUserInfo();
        setuserData(result);
      } catch (error) {
        console.error(error);

        return;
      }
    };

    loadUserInfo();
  }, []);

  useEffect(() => {
    const loadButtonList = async () => {
      try {
        // setIsLoading(true);
        const result = await getButtonList();
        const { data } = result;

        setButtonData(data);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
        // setError(error);
      }
    };

    loadButtonList();
  }, []);

  useEffect(() => {
    const loadUserFoldersData = async () => {
      try {
        // setIsLoading(true);
        const result = await getUserFolders(id);
        const { data } = result;

        setFoldersData(data);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
        // setError(error);
      }
    };

    loadUserFoldersData();
  }, [id]);

  return (
    <div className="folderPage">
      <Gnb userData={userData} />
      <AddLinkBar />
      <div className="folderPage_contents">
        <SearchBar />
        <div className="button_area">
          <div className="button_list">
            <Link className="button_folder" to={`/folder/`}>
              전체
            </Link>
            {buttonData.map((folder) => {
              // setFolderTitle(folder.name);
              // Too many re-renders. React limits the number of renders to prevent an infinite loop. 에러 발생하네요
              return (
                <Link key={folder.id} className="button_folder" to={`/folder/${folder.id}`}>
                  <span>{folder.name}</span>
                </Link>
              );
            })}
          </div>
          <button className="button_add_folder">
            폴더 추가
            <img className="img_add" src={add_icon} alt="" />
          </button>
        </div>
        <div className="title_area">
          <h2>{folderTitle}</h2> {/* 구현 못함 */}
          {id && (
            <div className="title_buttons">
              <button className="shareButton">
                <img src={share_icon} alt="공유 아이콘" />
                공유
              </button>
              <button className="renameButton">
                <img src={pen_icon} alt="펜 아이콘" />
                이름 변경
              </button>
              <button className="deleteButton">
                <img src={delete_icon} alt="삭제 아이콘" />
                삭제
              </button>
            </div>
          )}
        </div>
        {foldersData.length === 0 ? (
          <div className="folder_no_link">저장된 링크가 없습니다.</div>
        ) : (
          <div>
            <CardsArea foldersData={foldersData} buttonData={buttonData} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default FolderPage;
