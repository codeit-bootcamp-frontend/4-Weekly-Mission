import "../global.css";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getAPI } from "../APIUtil";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import AddLink from "../components/AddLink";
import Category from "../components/Category";
import SelectTheme from "../components/SelectTheme";
import Contents from "../components/Contents";

function Folder() {
  const [title, setTitle] = useState("전체");
  const [listId, setListId] = useState("");
  const [data, setData] = useState([]);

  const handleLoad = async () => {
    try {
      const response = await getAPI("/user/1");
      const result = response.data;
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, [listId]);

  return (
    <>
      <Header user={data} />
      <AddLink />
      <Search />
      <Category changeTitle={setTitle} changeID={setListId} />
      <SelectTheme titleName={title} />
      {data[0] ? (
        <Contents items={data} />
      ) : (
        <NoLink>저장된 링크가 없습니다.</NoLink>
      )}
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

export default Folder;
