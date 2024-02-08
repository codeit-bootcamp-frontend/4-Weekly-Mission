import { useState, useEffect, useCallback } from "react";
import { getFolderInfo } from "./../api";
import HeaderElement from "./../components/common/HeaderElement";
import FooterElement from "./../components/common/FooterElement";
import "../style/shared.css";

import smileIcon from "../assets/icons/icon_smile.png";
import searchIcon from "../assets/icons/icon_search.png";
import { CalcTime } from "./../calculator";

function SharedSection() {
  return (
    <section className="codeit-mark-section">
      <div className="codeit-mark">
        <img src={smileIcon} alt={"smile icon"}></img>
      </div>
      <span>@코드잇</span>
      <div id="favorites">
        <h1>⭐️ 즐겨찾기</h1>
      </div>
    </section>
  );
}

function FolderItem({ item }) {
  const { imageSource, createdAt, description, url, id } = item;
  const time = CalcTime(createdAt);
  return (
    <a href={url}>
      <div className="folder">
        <div className="imgBox">
          <img src={imageSource} alt={id}></img>
        </div>
        <div className="folder-textBox">
          <p id="time">{time}</p>
          <p id="info">{description}</p>
          <p id="date">2023. 3. 15</p>
        </div>
      </div>
    </a>
  );
}

function FolderList({ items }) {
  return (
    <article>
      <div id="search-bar">
        <img src={searchIcon} alt="searchIcon"></img>
        <input type="text" placeholder="링크를 검색해 보세요." />
      </div>
      <div className="folders-gridBox">
        {items.map((item) => {
          return <FolderItem item={item} key={item.id}></FolderItem>;
        })}
      </div>
    </article>
  );
}

function Shared() {
  const [folders, setFolders] = useState([]);

  const HandleLoad = useCallback(async () => {
    let results;
    try {
      results = await getFolderInfo();
    } catch (error) {
      console.log(error);
    }

    if (!results) return;
    setFolders(results);
  }, []);

  useEffect(() => {
    HandleLoad();
  }, [HandleLoad]);

  return (
    <>
      <HeaderElement></HeaderElement>
      <SharedSection></SharedSection>
      <FolderList items={folders}></FolderList>
      <FooterElement></FooterElement>
    </>
  );
}

export default Shared;
