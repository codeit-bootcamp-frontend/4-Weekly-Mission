import FolderLinkAddBar from "src/components/FolderLinkAddBar";
import "src/pages/Folder.css";
import {
  HandleCurrentSubFolder,
  SubFoldersList,
} from "src/components/LinkSubFolder";
import HeadNav from "src/components/HeadNav";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useAsync from "src/components/Hooks/useAsync";
import { acceptDataFromApi } from "src/Api";
import { useSearchParams } from "react-router-dom";
import {
  AddFolderButton,
  AddImage,
  CurrentSubFolder,
  EmptySpace,
  SubFolderUtil,
} from "src/components/LinkSubFolder.Styles";
import LinkCardCollection from "src/components/LinkCardCollection";
import LinkSearchBar from "src/components/LinkSearchBar";
import Modal from "src/components/Utils/Modal";

const StyledHeadNav = styled(HeadNav)`
  position: relative;
`;

export default function Folder({ userId = 1 }) {
  const [isCurrentFolderAll, setIsCurrentFolderAll] = useState(true);
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const [subFolderList, setSubFolderList] = useState([]);
  const [isEmptyResponse, setIsEmptyResponse] = useState(true);
  const [isLoading, error, acceptDataFromApiAsync] =
    useAsync(acceptDataFromApi);
  const [currentFolderQuery, setCurrentFolderQuery] = useState(
    `users/${userId}/links`
  );
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentModalType, setCurrentModalType] = useState("removeLink");
  const [modalData, setModalData] = useState("");

  const handleModalOpen = (modalType: any, modalData: any) => {
    setModalData("");
    setCurrentModalType(modalType);
    if (modalData) {
      setModalData(modalData);
    }
    setIsModalOpened(!isModalOpened);
  };

  const handleShareLoad = async (query: any) => {
    setIsEmptyResponse(false);
    const { data } = await acceptDataFromApiAsync(query);

    if (data.length === 0) {
      setIsEmptyResponse(true);
    }
    setItems(data);
  };

  const handleCurrentFolderChange = (id: number, name: string) => {
    setCurrentFolderName(name);
    setCurrentFolderQuery(
      `users/${userId}/links${id !== 0 ? `?folderId=${id}` : ""}`
    );
    setCurrentFolderId(id);

    if (id === 0) {
      setSearchParams("");
      setIsCurrentFolderAll(true);
      return;
    }
    setSearchParams({ folderId: `${id}` });
    setIsCurrentFolderAll(false);
  };

  const acceptSubFolderList = async (requestQuery: any) => {
    const { data } = await acceptDataFromApi(requestQuery);
    setSubFolderList(data);
  };

  useEffect(() => {
    acceptSubFolderList(`users/${userId}/folders`);
    handleShareLoad(`users/${userId}/links`);
  }, [userId]);

  useEffect(() => {
    handleShareLoad(currentFolderQuery);
  }, [currentFolderQuery]);

  const handleKebabAction = () => {};

  const kebabActions = [
    {
      btnName: "삭제하기",
      type: "removeLink",
      data: [],
      kebabHandle: handleModalOpen,
      modalBtnAction: handleKebabAction,
    },
    {
      btnName: "폴더에 추가",
      type: "addLinkToFolder",
      data: [subFolderList],
      kebabHandle: handleModalOpen,
      modalBtnAction: handleKebabAction,
    },
  ];

  const subFolderAction = [
    {
      btnName: "공유",
      imgUrl: "share.svg",
      imgAlt: "shareButton",
      type: "shareFolder",
      data: [currentFolderName, currentFolderId],
      kebabHandle: handleModalOpen,
      modalBtnAction: handleKebabAction,
    },
    {
      btnName: "이름 변경",
      imgUrl: "pen.svg",
      imgAlt: "RenameButton",
      type: "nameChange",
      kebabHandle: handleModalOpen,
      modalBtnAction: handleKebabAction,
    },
    {
      btnName: "삭제",
      imgUrl: "Group 36.svg",
      imgAlt: "DeleteButton",
      type: "removeFolder",
      data: currentFolderName,
      kebabHandle: handleModalOpen,
      modalBtnAction: handleKebabAction,
    },
  ];

  return (
    <>
      <Modal
        isOpened={isModalOpened}
        modalType={currentModalType}
        modalData={modalData}
        isOpenedToggle={() => {
          setIsModalOpened(!isModalOpened);
        }}
      />
      <StyledHeadNav />
      <FolderLinkAddBar
        handleSubmit={handleModalOpen}
        subFolderList={subFolderList}
      />
      <main>
        <SubFolderUtil>
          <SubFoldersList
            subFolderData={subFolderList}
            handleCurrentFolderChange={handleCurrentFolderChange}
          />
          <AddFolderButton
            className="add-sub-folder"
            onClick={() => handleModalOpen("addSubFolder", "")}
          >
            폴더 추가 <AddImage />
          </AddFolderButton>
        </SubFolderUtil>
        <SubFolderUtil>
          <CurrentSubFolder>{currentFolderName}</CurrentSubFolder>
          {!isCurrentFolderAll && (
            <HandleCurrentSubFolder handleFunction={subFolderAction} />
          )}
        </SubFolderUtil>
        <LinkSearchBar />
        {isEmptyResponse || isLoading ? (
          <EmptySpace>
            {isLoading ? "불러오는 중입니다..." : "저장된 링크가 없습니다."}
          </EmptySpace>
        ) : (
          <>
            <LinkCardCollection
              items={items}
              favorite={true}
              kebab={kebabActions}
            />
          </>
        )}
      </main>
    </>
  );
}
