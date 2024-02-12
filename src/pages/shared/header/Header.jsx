import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [userFolder, setUserFolder] = useState({
    folderName: "",
    ownerName: "",
    ownerImg: "",
  });

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) =>
        setUserFolder({
          folderName: data.folder.name,
          ownerName: data.folder.owner.name,
          ownerImg: data.folder.owner.profileImageSource,
        })
      );
  }, []);
  return (
    <header>
      <div className="hero-header">
        <h1 className="owner">
          <img
            className="owner-img"
            src={userFolder.ownerImg}
            alt="소유자 프로필 이미지"
          />
          {userFolder.ownerName}
        </h1>
        <div className="folder-name">
          {userFolder.folderName}
        </div>
      </div>
    </header>
  );
}

export default Header;
