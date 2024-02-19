import "../global.css";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/NavBottom/Header";
import Footer from "../components/NavBottom/Footer";
import Search from "../components/Search";
import AddLink from "../components/AddLink";
import Category from "../components/Category";
import SelectTheme from "../components/SelectTheme";
import Contents from "../components/Contents";

function Folder() {
  const [title, setTitle] = useState("전체");
  const [listId, setListId] = useState("");
  const [data, setData] = useState([]);

  const handleLoad = async (id = listId) => {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/users/1${
          id === 0 ? `/links` : `/folders/${id}`
        }`
      );
      const result = await response.json();
      const resultData = result.data;
      setData(resultData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, [listId]);

  return (
    <>
      <Header />
      <AddLink />
      <Search />
      <Category changeTitle={setTitle} changeID={setListId} />
      <SelectTheme titleName={title} />
      {data[0] ? (
        <Contents items={data} />
      ) : (
        <NoLink>저장된 링크가 없습니다.</NoLink>
      )}
      <AddFolderBtn>폴더 추가 +</AddFolderBtn>
      <Footer />
    </>
  );
}

const NoLink = styled.p`
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
