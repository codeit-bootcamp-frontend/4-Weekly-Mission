import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAsync from "src/Components/Hooks/useAsync";
import { acceptDataFromApi } from "src/Utils/Api";
import * as S from "./FolderPage.style";

// Components
import FolderLinkAddBar from "src/Components/LinkCard/FolderLinkAddBar";
import {
  HandleCurrentSubFolder,
  SubFoldersList,
} from "src/pages/FolderPage/Components/LinkSubFolder";
import LinkCardCollection from "src/Components/LinkCard/LinkCardCollection";
import LinkSearchBar from "src/Components/LinkCard/LinkSearchBar";
import ModalLoader from "src/Components/Modal/ModalLoader";

// Types
import UserLinkDataType from "src/@types/UserLinkDataType";
import {
  LinkCardFunctionObjectType,
  LinkFolderFunctionObjectType,
} from "src/@types/ModalFunctionDataTypes";

/**
 *
 * @param userId 상위 페이지로부터 전달 받을 userId 정보
 * @description 폴더 페이지 컴포넌트
 * @reminder handleModalOpen의 타입에 일관성이 없어 any타입을 지정해 두었음. 나중에 수정 필요.
 * @returns
 */
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
  const [originItems, setOriginItems] = useState<UserLinkDataType[]>([]);
  const [items, setItems] = useState<UserLinkDataType[]>([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentModalType, setCurrentModalType] = useState("removeLink");
  const [modalData, setModalData] = useState("");
  const [cardFilter, setCardFilter] = useState<string>("");

  const handleModalOpen = (modalType: string, modalData: any) => {
    // ModalData의 형식 통일 필요
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
    data.map((items: UserLinkDataType) => {
      items.description = items.description ? items.description : "";
      items.title = items.title ? items.title : "";
    });

    setOriginItems(data);
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

  const acceptSubFolderList = async (requestQuery: string) => {
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

  useEffect(() => {
    if (cardFilter === "") {
      setItems(originItems);
      return;
    }
    setItems(
      originItems.filter(
        (item: UserLinkDataType) =>
          item.title.toLowerCase().includes(cardFilter.toLowerCase()) ||
          item.description.toLowerCase().includes(cardFilter.toLowerCase()) ||
          item.url.toLowerCase().includes(cardFilter.toLowerCase())
      )
    );
  }, [cardFilter]);

  const handleKebabAction = () => {};

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
      {isModalOpened && (
        <ModalLoader
          modalType={currentModalType}
          modalData={modalData}
          setIsOpened={() => {
            setIsModalOpened(false);
          }}
        />
      )}
      <S.FolderHeadNav />
      <FolderLinkAddBar
        handleSubmit={handleModalOpen}
        subFolderList={subFolderList}
      />
      <S.FolderPageMain>
        <S.SubFolderUtil>
          <SubFoldersList
            subFolderData={subFolderList}
            handleCurrentFolderChange={handleCurrentFolderChange}
          />
          <S.AddFolderButton
            className="add-sub-folder"
            onClick={() => handleModalOpen("addSubFolder", "")}
          >
            폴더 추가 <S.AddImage />
          </S.AddFolderButton>
        </S.SubFolderUtil>
        <S.SubFolderUtil>
          <S.CurrentSubFolder>{currentFolderName}</S.CurrentSubFolder>
          {!isCurrentFolderAll && (
            <HandleCurrentSubFolder subFolderUtils={subFolderAction} />
          )}
        </S.SubFolderUtil>
        <LinkSearchBar cardFilter={cardFilter} setCardFilter={setCardFilter} />
        {isEmptyResponse || isLoading ? (
          <S.EmptySpace>
            {isLoading ? "불러오는 중입니다..." : "저장된 링크가 없습니다."}
          </S.EmptySpace>
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
