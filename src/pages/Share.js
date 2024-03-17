import ShareFolderProfile from "src/components/ShareFolderProfile";
import LinkSearchBar from "src/components/LinkSearchBar";
import LinkCardCollection from "src/components/LinkCardCollection";
import "./Share.css";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "src/Api";
import HeadNav from "src/components/HeadNav";

export default function Share() {
  const [items, setItems] = useState([]);

  const handleShareLoad = async () => {
    const {
      folder: { links },
    } = await acceptDataFromApi("sample/folder");
    setItems(links);
  };

  useEffect(() => {
    handleShareLoad();
  }, []);

  return (
    <>
      <HeadNav />
      <div>
        <ShareFolderProfile />
        <main>
          <LinkSearchBar />
          <LinkCardCollection items={items} />
        </main>
      </div>
    </>
  );
}
