import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAsync from "src/Components/Hooks/useAsync";
import { acceptDataFromApi } from "src/Utils/Api";
import * as S from "./FolderPage.style";

// Components
import FolderLinkAddBar from "src/pages/FolderPage/Components/FolderLInkAddBar/FolderLinkAddBar";
import {
  HandleCurrentSubFolder,
  SubFoldersList,
} from "src/pages/FolderPage/Components/LinkSubFolder/LinkSubFolder";
import LinkCardCollection from "src/Components/LinkCard/LinkCardCollection/LinkCardCollection";
import LinkSearchBar from "src/Components/LinkCard/LInkSearchBar/LinkSearchBar";
import ModalLoader from "src/Components/Modal/ModalLoader";
import HeadNav from "src/Components/BasicLayout/HeadNav";

// Types
import UserLinkDataType from "src/@types/UserLinkDataType";
import {
  LinkCardFunctionObjectType,
  LinkFolderFunctionObjectType,
} from "src/@types/ModalFunctionDataTypes";
import FolderListDataType from "src/@types/FolderListDataType";
type handleCurrentFolderChangeType = (id: number, name: string) => void;

/**
 * @param userId 상위 페이지로부터 전달 받을 userId 정보
 * @description 폴더 페이지 컴포넌트
 * @reminder handleModalOpen의 타입에 일관성이 없어 any타입을 지정해 두었음. 나중에 수정 필요.
 * @returns
 */
export default function FolderPage({ userId = 1 }) {
  const [isCurrentFolderAll, setIsCurrentFolderAll] = useState(true);
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const [subFolderList, setSubFolderList] = useState<FolderListDataType[]>([]);
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
  const [isLinkAddBarHidden, setIsLinkAddBarHidden] = useState<boolean>(false);
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);
  const [isLinkAddBarVisible, setIsLinkAddBarVisible] =
    useState<boolean>(false);

  const addLinkBarObserveRef = useRef<HTMLDivElement>(null);
  const footerObserveRef = useRef<HTMLDivElement>(null);

  const addLinkBarObserver = new IntersectionObserver((entries: any) => {
    entries.map((entry: any) => {
      if (entry.target === addLinkBarObserveRef.current) {
        if (entry.isIntersecting) {
          setIsLinkAddBarVisible(true);
        } else {
          setIsLinkAddBarVisible(false);
        }
        return 0;
      }

      if (entry.target === footerObserveRef.current) {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      }
      return 0;
    });
  });

  const handleModalOpen = (modalType: string, modalData: any) => {
    // ModalData의 형식 통일 필요
    setModalData("");
    setCurrentModalType(modalType);
    if (modalData) {
      setModalData(modalData);
    }
    console.log(modalData);
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

  // useEffect를 이용하여 IntersectionObserver을 등록
  useEffect(() => {
    addLinkBarObserver.observe(addLinkBarObserveRef.current!);
    addLinkBarObserver.observe(footerObserveRef.current!);
  }, []);

  useEffect(() => {
    if (isFooterVisible || isLinkAddBarVisible) {
      setIsLinkAddBarHidden(false);
    } else {
      setIsLinkAddBarHidden(true);
    }
  }, [isFooterVisible, isLinkAddBarVisible]);

  const handleKebabAction = () => {};

  // 카드의 케밥 메뉴의 이름과 각각의 기능이 담긴 객체
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

  // subFolderUtils에 기능, 버튼 이름, 버튼 이미지 등을 전달할 객체
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
      data: [],
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
      <HeadNav isSticky={false} />
      <FolderLinkAddBar
        handleSubmit={handleModalOpen}
        subFolderList={subFolderList}
        isHidden={isLinkAddBarHidden}
      />
      <S.LinkAddBarEndPoint
        $linkAddBarMargin={isLinkAddBarHidden}
        ref={addLinkBarObserveRef}
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
          <S.CurrentSubFolder className="lb-h3-semibold">
            {currentFolderName}
          </S.CurrentSubFolder>
          {!isCurrentFolderAll && (
            <HandleCurrentSubFolder subFolderUtils={subFolderAction} />
          )}
        </S.SubFolderUtil>
        <LinkSearchBar cardFilter={cardFilter} setCardFilter={setCardFilter} />
        {isEmptyResponse || isLoading ? (
          <S.EmptySpace className="lb-body1-regular">
            {isLoading ? "불러오는 중입니다..." : "저장된 링크가 없습니다."}
          </S.EmptySpace>
        ) : (
          <>
            <LinkCardCollection
              items={[...items, ...items]}
              favorite={true}
              kebab={kebabActions}
            />
          </>
        )}
      </S.FolderPageMain>
      <S.FooterStartPoint ref={footerObserveRef} />
    </>
  );
}
