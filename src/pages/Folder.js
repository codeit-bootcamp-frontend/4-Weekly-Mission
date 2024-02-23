import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { getAllLinkData } from "./../api/api";

import HeaderElement from "./../components/common/HeaderElement";
import FooterElement from "./../components/common/FooterElement";
import GlobalStyle from "./../components/common/GlobalStyle";
import FolderInput from "./../components/folder/FolderInput";
import FolderList from "./../components/common/FolderList";
import Input from "../components/common/Input";
import Menus from "../components/folder/Menus";
import FolderTitle from "../components/folder/FolderTitle";

const Folder = () => {
  const [titleName, setTitleName] = useState("전체");
  const [listId, setListId] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllLinkData(listId);
        const result = response.data;
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [listId]);

  return (
    <Container>
      <GlobalStyle />
      <HeaderElement $positionval="static" />
      <FolderInput />
      <Input />
      <Menus changeTitle={setTitleName} changeID={setListId} />
      <FolderTitle titleName={titleName} />
      {data[0] ? (
        <FolderList items={data}></FolderList>
      ) : (
        <NoLinkMsg>저장된 링크가 없습니다.</NoLinkMsg>
      )}
      <AddFolderBtn>폴더 추가 +</AddFolderBtn>
      <FooterElement />
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

const AddFolderBtn = styled.button`
  border: none;
  border-radius: 20px;
  border: 1px solid var(--Linkbrary-white, #fff);
  background: var(--Linkbrary-primary-color, #6d6afe);
  position: sticky;
  left: 40%;
  bottom: 101px;
  padding: 8px 24px;
  display: none;

  color: var(--Linkbrary-gray10, #e7effb);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  @media (max-width: 774px) {
    display: block;
  }
`;

export default Folder;
