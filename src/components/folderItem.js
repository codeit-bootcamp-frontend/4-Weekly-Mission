import { useEffect, useState } from "react";
import Img from "../image/dog.png";
// import Folder from "./folder";

function FolderItem() {
  const [folderData, setFolderData] = useState([]);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setFolderData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(folderData);

  return (
    <section className="pages">
      <img className="page" src={Img} alt="Dog" />
      <img className="page" src={Img} alt="Dog" />
      <img className="page" src={Img} alt="Dog" />
      <img className="page" src={Img} alt="Dog" />
    </section>
  );
}

export default FolderItem;
