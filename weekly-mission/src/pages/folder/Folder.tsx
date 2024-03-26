import Footer from "components/Footer";
import Header from "components/Header";
import LinkAddInput from "./component/LinkAddInput";
import SearchInput from "components/SearchInput";
import { useEffect, useReducer, useRef, useState } from "react";
import { folderLinkDataApi, folderListDataApi } from "api";
import CategoryBar from "./component/CategoryBar";
import { useParams } from "react-router-dom";
import shareIcon from "assests/img/share.png";
import penIcon from "assests/img/pen.png";
import deletIcon from "assests/img/delet.png";
import LinkCard from "components/LinkCard";
import ModalLayout from "./component/ModalLayout";
import * as S from "./Folder.styled";
import { CategoryDataType, Links } from "typeStore";

const reducer = (state: any, action: any) => {
  if (action.state) {
    switch (action.type) {
      case "Edit":
        return { ...action };
      case "Delete":
        return { ...action };
      case "Share":
        return { ...action };
      case "AddAtFolder":
        return { ...action };
    }
  } else {
    return { state: false };
  }
};

const Folder: React.FC = () => {
  const [categoryData, setCategoryData] = useState<CategoryDataType[] | []>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [folderLinkList, setFolderLinkList] = useState<Links[] | []>([]);
  const [filterData, setFilterData] = useState<Links[] | []>([]);
  const [inputLength, setInputLength] = useState<number>(0);
  const [handleModal, dispatch] = useReducer(reducer, { state: false });
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isFooterVisible, setFooterVisible] = useState<boolean>(false);
  const params = useParams();
  const ref = useRef<any>();
  const getFolderListData = async () => {
    const response = await folderListDataApi();
    setCategoryData(response.data);
  };

  const getFolderLinkData = async (folderId: string) => {
    const response = await folderLinkDataApi(folderId);
    const data = response.data;
    const filterData = data.filter((link: Links) => {
      return link.folder_id === folderId;
    });
    setFolderLinkList(filterData);
  };
  useEffect(() => {
    getFolderListData();
  }, []);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries, observe) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 1.0,
      }
    );
    io.observe(ref.current);
  }, [isFooterVisible]);

  useEffect(() => {
    const folderId: any =
      params.folderId === "all" || NaN ? null : params.folderId;

    getFolderLinkData(folderId);
  }, [currentCategory]);

  const onClickCategory = (category: string): void => {
    setCurrentCategory(category);
  };

  const CardList = inputLength
    ? filterData.map((link) => (
        <LinkCard linkData={link} key={link.id} dispatch={dispatch}></LinkCard>
      ))
    : folderLinkList.map((link) => (
        <LinkCard linkData={link} key={link.id} dispatch={dispatch}></LinkCard>
      ));

  return (
    <>
      <Header />
      <main>
        <S.Box ref={ref} />
        <S.OwnerSection $position={isVisible} $isHidden={isFooterVisible}>
          <LinkAddInput dispatch={dispatch} />
        </S.OwnerSection>
        <S.LinkCardSection>
          <S.CardListContainer>
            <SearchInput
              folderData={folderLinkList}
              setData={setFilterData}
              setLength={setInputLength}
            />
            <S.Wrap>
              <CategoryBar
                categoryList={categoryData}
                onClick={onClickCategory}
                dispatch={dispatch}
              />
              <S.CurrentCategory>
                <S.GategoryName>{currentCategory}</S.GategoryName>
                <S.FunctionsBox $visibility={currentCategory}>
                  <S.FunctionBtn
                    onClick={() => {
                      dispatch({
                        state: true,
                        type: "Share",
                        folderName: currentCategory,
                      });
                    }}
                  >
                    <img src={shareIcon} alt="공유 아이콘" />
                    공유
                  </S.FunctionBtn>
                  <S.FunctionBtn
                    onClick={() => {
                      dispatch({
                        state: true,
                        type: "Edit",
                        title: "폴더 이름 변경",
                        buttonText: "변경하기",
                        placeHolder: "변경 이름 입력",
                      });
                    }}
                  >
                    <img src={penIcon} alt="수정 아이콘" />
                    이름 변경
                  </S.FunctionBtn>
                  <S.FunctionBtn
                    onClick={() => {
                      dispatch({
                        state: true,
                        type: "Delete",
                        title: "폴더 삭제",
                        deleteTarget: currentCategory,
                      });
                    }}
                  >
                    <img src={deletIcon} alt="삭제 아이콘" />
                    삭제
                  </S.FunctionBtn>
                </S.FunctionsBox>
              </S.CurrentCategory>
              <S.CardList>
                {folderLinkList.length ? (
                  CardList
                ) : (
                  <S.NotLink>저장된 링크가 없습니다</S.NotLink>
                )}
              </S.CardList>
            </S.Wrap>
          </S.CardListContainer>
        </S.LinkCardSection>
      </main>
      <Footer setVisible={setFooterVisible} />
      <ModalLayout
        modalState={handleModal}
        dispatch={dispatch}
        folderList={categoryData}
      />
    </>
  );
};

export default Folder;
