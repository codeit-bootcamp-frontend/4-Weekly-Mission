import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { getAllLinkData } from "../api/api";
import HeaderElement from "../components/common/HeaderElement";
import FooterElement from "../components/common/FooterElement";
import GlobalStyle from "../components/common/GlobalStyle";
import FolderInput from "../components/folder/FolderInput";
import FolderList from "../components/common/FolderList";
import Input from "../components/common/Input";
import Menus from "../components/folder/Menus";
import FolderTitle from "../components/folder/FolderTitle";
import { SharedModal } from "../components/common/modals/SharedModal";
import { EditNameModal } from "../components/common/modals/EditNameModal";
import { DeleteModal } from "../components/common/modals/DeleteModal";
import { AddFolderModal } from "../components/common/modals/AddFolderModal";
import { COLORS } from "../constants/colors";

const Folder = () => {
  const [titleName, setTitleName] = useState("전체");
  const [listId, setListId] = useState("");
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllLinkData(listId);
        const result = await response.data;
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [listId]);

  const onSearchEnterClickHandle = () => {
    findCardsByKeyword(searchInputValue);
  };

  const addLinkDivRef = useRef(null);
  const footerDivRef = useRef(null);
  const [isAddLinkVisible, setIsAddLinkVisible] = useState(false);

  const onIntersectionHandle = async (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsAddLinkVisible(true);
      } else {
        setIsAddLinkVisible(false);
      }
    });
  };
  useEffect(() => {
    if (addLinkDivRef.current) {
      const observer1 = new IntersectionObserver(onIntersectionHandle, {
        threshold: 0.1,
      });

      if (addLinkDivRef.current) {
        observer1.observe(addLinkDivRef.current);
      }

      const observer2 = new IntersectionObserver(onIntersectionHandle, {
        threshold: 0.1,
      });

      if (footerDivRef.current) {
        observer2.observe(footerDivRef.current);
      }

      return () => {
        observer1.disconnect();
        observer2.disconnect();
      };
    }
  }, []);

  const findCardsByKeyword = (keyword: string) => {
    const results = [];
    if (data) {
      data.forEach((card) => {
        const cardInfo = card.title + card.description + card.url;
        if (cardInfo && cardInfo.includes(keyword)) {
          results.push(card);
        } else {
          console.log("없음");
        }
      });
    }
    setData(results);
  };

  return (
    <Container>
      <SharedModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <EditNameModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <DeleteModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <AddFolderModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <GlobalStyle />
      <HeaderElement $positionval="static" />
      <FolderInput
        setIsVisible={setIsModalVisible}
        $isAddLinkVisible={isAddLinkVisible}
        ref={addLinkDivRef}
      />
      <Input
        inputValue={searchInputValue}
        setInputValue={setSearchInputValue}
        onEnterButtonHandle={onSearchEnterClickHandle}
      />
      <Menus
        changeTitle={setTitleName}
        changeID={setListId}
        setIsVisible={setIsModalVisible}
      />
      <FolderTitle titleName={titleName} setIsModal={setIsModalVisible} />
      {data[0] ? (
        <FolderList
          items={data}
          $isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        ></FolderList>
      ) : (
        <NoLinkMsg>저장된 링크가 없습니다.</NoLinkMsg>
      )}
      <AddFolderBtn $isAddLinkVisible={isAddLinkVisible}>
        폴더 추가 +
      </AddFolderBtn>
      <div ref={footerDivRef}>
        <FooterElement />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 0px;
`;

const NoLinkMsg = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-top: 40px;
`;

const AddFolderBtn = styled.button<{ $isAddLinkVisible: boolean }>`
  border: none;
  border-radius: 20px;
  border: 1px solid ${COLORS.White};
  background: ${COLORS.Primary};
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${({ $isAddLinkVisible }) => ($isAddLinkVisible ? "50px" : "150px")};
  padding: 8px 24px;
  display: none;

  color: ${COLORS.Grey_200};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  @media (max-width: 375px) {
    display: block;
  }
`;

export default Folder;
