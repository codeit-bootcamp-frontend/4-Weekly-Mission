import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../css/Folder.css";

function Folder() {
  const [links, setLinks] = useState([]);

  return (
    <>
      <Nav />
      <div className="FolderInputBox">
        <input
          className="FolderAddInput"
          placeholder="🔗 링크를 추가해 보세요"
        />
        <button className="FolderAddButton">추가하기</button>
      </div>
      <div className="FolderContentBox">
        <input
          className="FolderSearchInput"
          placeholder="🔎 링크를 검색해 보세요."
        />
        <div className="FolderContents">
          <div className="FolderContent">
            {links.length === 0 ? (
              <div className="FolderNoCards">저장된 링크가 없습니다.</div>
            ) : (
              links.map((link, idx) => {
                <div className="FolderCards" key={idx}>
                  {link}
                </div>;
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Folder;
