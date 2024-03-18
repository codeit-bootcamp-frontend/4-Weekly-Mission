import FolderLinkAddBar from "src/components/LinkCard/FolderLinkAddBar";
import * as S from "./FolderPage.style";
import {
  HandleCurrentSubFolder,
  SubFoldersList,
} from "src/pages/FolderPage/components/LinkSubFolder";
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
} from "src/pages/FolderPage/components/LinkSubFolder.style";
import LinkCardCollection from "src/components/LinkCard/LinkCardCollection";
import LinkSearchBar from "src/components/LinkCard/LinkSearchBar";
import ModalLoader from "src/components/Modal/ModalLoader";
import UserLinkDataType from "src/@types/UserLinkDataType";

export default function FolderPage({ userId = 1 }) {
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
  const [items, setItems] = useState<UserLinkDataType[]>([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentModalType, setCurrentModalType] = useState("removeLink");
  const [modalData, setModalData] = useState("");

  const handleModalOpen = (modalType: string, modalData: any) => {
    setModalData("");
    setCurrentModalType(modalType);
    if (modalData) {
      setModalData(modalData);
    }
    setIsModalOpened(!isModalOpened);
  };

  const handleShareLoad = async (query: string) => {
    setIsEmptyResponse(false);
    const { data } = await acceptDataFromApiAsync(query);

    if (data.length === 0) {
      setIsEmptyResponse(true);
    }
    setItems(data);
  };

  type handleCurrentFolderChangeType = (id: number, name: string) => void;

  const handleCurrentFolderChange: handleCurrentFolderChangeType = (
    id,
    name
  ) => {
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

  interface LinkCardFunctionObjectType {
    buttonName: string;
    type: string;
    data?: any;
    modalHandle: (modalType: string, modalData: any) => void;
    modalButtonAction: () => void;
  }

  const kebabActions: LinkCardFunctionObjectType[] = [
    {
      buttonName: "삭제하기",
      type: "removeLink",
      data: [],
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
    {
      buttonName: "폴더에 추가",
      type: "addLinkToFolder",
      data: [subFolderList],
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
  ];

  interface LinkFolderFunctionObjectType extends LinkCardFunctionObjectType {
    imgUrl: string;
    imgAlt: string;
  }

  const subFolderAction: LinkFolderFunctionObjectType[] = [
    {
      buttonName: "공유",
      imgUrl: "share.svg",
      imgAlt: "shareButton",
      type: "shareFolder",
      data: [currentFolderName, currentFolderId],
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
    {
      buttonName: "이름 변경",
      imgUrl: "pen.svg",
      imgAlt: "RenameButton",
      type: "nameChange",
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
    {
      buttonName: "삭제",
      imgUrl: "Group 36.svg",
      imgAlt: "DeleteButton",
      type: "removeFolder",
      data: currentFolderName,
      modalHandle: handleModalOpen,
      modalButtonAction: handleKebabAction,
    },
  ];

  return (
    <>
      <ModalLoader
        isOpened={isModalOpened}
        modalType={currentModalType}
        modalData={modalData}
        isOpenedToggle={() => {
          setIsModalOpened(!isModalOpened);
        }}
      />
      <S.FolderHeadNav />
      <FolderLinkAddBar
        handleSubmit={handleModalOpen}
        subFolderList={subFolderList}
      />
      <S.FolderPageMain>
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
      </S.FolderPageMain>
    </>
  );
}
