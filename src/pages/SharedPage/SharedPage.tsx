import { useEffect, useState } from "react";
import { fetchFolderData } from "services/api";
import style from "./shared.module.css";
import Header from "./components/Header";
import CardList from "components/CardList/CardList";
import SearchBar from "components/Input/SearchBar/SearchBar";
import { GetLinkResponse, DataResponse } from "types/apis";

function SharedPage() {
  const [fileImg, setFileImg] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [items, setItems] = useState<DataResponse<GetLinkResponse[]>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = async () => {
    try {
      setIsLoading(true);
      const data = await fetchFolderData();
      const { links, name, owner } = data.folder;
      setOwnerName(owner.name);
      setFileImg(owner.profileImageSource);
      setFolderName(name);
      setItems(links);
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Header fileImg={fileImg} ownerName={ownerName} folderName={folderName} />
      <div className={style.container}>
        <div className={style.content}>
          <SearchBar />
          <CardList items={items} />
        </div>
      </div>
    </div>
  );
}

export default SharedPage;
