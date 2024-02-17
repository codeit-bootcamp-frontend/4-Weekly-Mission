import AddLinkInput from "./AddLinkInput";
import FolderContainer from "./FolderContainer";
import SearchLinkInput from "./SearchLinkInput";
import AddLinkContainer from "./AddLinkContainer";
import MainContainer from "./MainContainer";
import AddLinkButton from "./AddLinkButton";
import InputContainer from "./InputContainer";
import { useEffect, useState } from "react";
import { getFolderList, getFolderListData } from "../util/api";
import ButtonListContainer from "./ButtonListContainer";
import ButtonListItem from "./ButtonListItem";
import FolderTitle from "./FolderTitle";
import FolderList from "./FolderList";
import FolderListItem from "./FolderListItem";
import ButtonContainer from "./ButtonContainer";
import AddFolderContainer from "./AddFolderContainer";
import addImgPurple from "../../assets/img/png/add-purple.png";
import addImgWhite from "../../assets/img/png/add-white.png";
import FolderTitleContainer from "./FolderTitleContainer";
import Share from "./Share";
import EditName from "./EditName";
import Delete from "./Delete";
import FunctionContainer from "./FunctionContainer";

import shareImg from "../../assets/img/png/share.png";
import editNameImg from "../../assets/img/png/pen.png";
import deleteImg from "../../assets/img/png/delete.png";

function Folder() {
  const [folderList, setFolderList] = useState(null);
  const [folderListItem, setFolderListItem] = useState(null);
  const [clickedButtonId, setClickedButtonId] = useState(null);
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [folderTitleName, setFolderTitleName] = useState("");
  const [mouseHoverkey, setMouseHoverKey] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleListItemHover = (id) => {
    setMouseHoverKey(id);
  };
  const handleListItemMouseOut = () => {
    setMouseHoverKey(null);
  };
  const handleFolderList = async () => {
    const result = await getFolderList();
    if (!result) return;
    const data = result.data;
    setFolderList(data);
  };

  const handleButtonListItemClick = async (id, name) => {
    setClickedButtonId(id);
    setFolderTitleName(name);

    let result;
    if (name === "전체") {
      result = await getFolderListData();
      setIsSelectedAll(true);
    } else {
      result = await getFolderListData(id);
      setIsSelectedAll(false);
    }

    if (!result) return;

    const data = result.data;
    setFolderListItem(data);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleFolderList();
    handleButtonListItemClick(0, "전체");
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <FolderContainer>
        <AddLinkContainer>
          <InputContainer>
            <AddLinkInput type="text" placeholder="링크를 추가해 보세요" />
            <AddLinkButton>추가하기</AddLinkButton>
          </InputContainer>
        </AddLinkContainer>
        <MainContainer>
          <SearchLinkInput type="text" placeholder="링크를 검색해 보세요" />
          {folderList && folderList.length > 0 ? (
            <>
              <ButtonContainer>
                <ButtonListContainer>
                  <ButtonListItem
                    key="0"
                    onClick={() => handleButtonListItemClick(0, "전체")}
                    isClick={clickedButtonId === 0 ? true : false}
                  >
                    전체
                  </ButtonListItem>
                  {folderList &&
                    folderList.map((item) => (
                      <ButtonListItem
                        onClick={() =>
                          handleButtonListItemClick(item.id, item.name)
                        }
                        isClick={item.id === clickedButtonId ? true : false}
                        key={item.id}
                      >
                        {item.name}
                      </ButtonListItem>
                    ))}
                </ButtonListContainer>
                <AddFolderContainer>
                  <span>폴더 추가</span>
                  <img
                    src={windowWidth > 390 ? addImgPurple : addImgWhite}
                    alt={windowWidth > 390 ? `addImgPurple` : `addImgWhite`}
                  />
                </AddFolderContainer>
              </ButtonContainer>
              <FolderTitleContainer>
                <FolderTitle>{folderTitleName}</FolderTitle>
                {isSelectedAll || (
                  <FunctionContainer>
                    <Share>
                      <img src={shareImg} alt="shareImg" />
                      <span>공유</span>
                    </Share>
                    <EditName>
                      <img src={editNameImg} alt="editNameImg" />
                      <span>이름변경</span>
                    </EditName>
                    <Delete>
                      <img src={deleteImg} alt="deleteImg" />
                      <span>삭제</span>
                    </Delete>
                  </FunctionContainer>
                )}
              </FolderTitleContainer>

              {folderListItem && folderListItem.length > 0 ? (
                <>
                  <FolderList>
                    {folderListItem &&
                      folderListItem.map((item) => (
                        <FolderListItem
                          item={item}
                          key={item.id}
                          onHover={() => handleListItemHover(item.id)}
                          hoverdId={mouseHoverkey}
                          onMouseOut={() => handleListItemMouseOut()}
                        />
                      ))}
                  </FolderList>
                </>
              ) : (
                <div>저장된 링크가 없습니다</div>
              )}
            </>
          ) : (
            <div>저장된 폴더가 없습니다</div>
          )}
        </MainContainer>
      </FolderContainer>
    </>
  );
}
export default Folder;
