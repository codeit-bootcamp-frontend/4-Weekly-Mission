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
  const [isHovering, setIsHovering] = useState(false);
  const { imageSource, createdAt, description, url, id } = item;

  const time = CalcTime(createdAt);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div
        className="folder"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="imgBox">
          {imageSource ? (
            <img
              src={imageSource}
              alt={id}
              className={isHovering ? "grow" : "folder-img"}
            ></img>
          ) : (
            <p>no image</p>
          )}
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
    let foldersArr;
    try {
      results = await getFolderInfo();
      foldersArr = await results.folder.links;
    } catch (error) {
      console.log(error);
    }

    if (!foldersArr) return;
    setFolders(foldersArr);
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
