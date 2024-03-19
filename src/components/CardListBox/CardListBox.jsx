import { useEffect, useState } from "react";
import CardSearchInput from "./CardSearchInput/CardSearchInput";
import useGet from "../../hooks/useGet";
import CardFolderList from "./CardFolderList/CardFolderList";

export default function CardListBox() {
  const [folders, setFolders] = useState([]);
  const url = `https://bootcamp-api.codeit.kr/api/users/1/folders`;
  const { data, isLoading } = useGet(url);

  useEffect(() => {
    if (!isLoading) {
      setFolders(data.data);
    }
  }, [data, isLoading]);

  return (
    <main>
      <CardSearchInput />
      <CardFolderList folders={folders} />
    </main>
  );
}
