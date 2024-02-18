import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { getAllLinkData } from "./../api/api";

import HeaderElement from "./../components/common/HeaderElement";
import FooterElement from "./../components/common/FooterElement";
import GlobalStyle from "./../components/common/GlobalStyle";
import FolderInput from "./../components/Folder/FolderInput";
import FolderList from "./../components/common/FolderList";
import Input from "../components/common/Input";
import Menus from "../components/Folder/Menus";
import FolderTitle from "../components/Folder/FolderTitle";

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
    <>
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
      <FooterElement />
    </>
  );
};

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

export default Folder;
