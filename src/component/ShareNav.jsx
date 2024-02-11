import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ShareNav.css";

function ForderNav(props) {
  const [shareData, setShareData] = useState(null); //folder 정보 저장 변수

  useEffect(() => {
    const fetchShareFolderData = async () => {
      //axios 문법
      try {
        const response = await axios.get(
          //get 한 부분을 response에 저장
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        setShareData(response.data.folder); //위 api의 folder 배얼에서 정보를 읽어와야기에 data.folder 수행
      } catch (error) {
        console.error("Error fetching share folder data:", error);
      }
    };

    fetchShareFolderData();
  }, []);

  return (
    <>
      <section className="shareSection">
        {shareData ? (
          <div className="shareFolder">
            <div className="shareFolder--user">
              <img
                className="shareFolder--user__img"
                src={shareData.owner.profileImageSource}
                alt="shareFolder"
              ></img>
              <p className="shareFolder--user__name">{shareData.owner.name}</p>
            </div>
            <p className="shareFolder--foldername">{shareData.name}</p>
          </div>
        ) : (
          <p>정보를 가져오는 중입니다...</p> //shareData = null 일때 나타남
        )}
      </section>
    </>
  );
}

export default ForderNav;
