import ShareFolderProfile from "src/components/ShareFolderProfile";
import LinkSearchBar from "src/components/LinkSearchBar";
import LinkCardCollection from "src/components/LinkCardCollection";
import * as S from "./SharePage.style";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "src/Api";
import HeadNav from "src/components/HeadNav";
import UserLinkDataType from "src/@types/UserLinkDataType";

export default function SharePage() {
  const [items, setItems] = useState<UserLinkDataType[]>([]);

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
      <ShareFolderProfile />
      <S.SharePageMain>
        <LinkSearchBar />
        <LinkCardCollection items={items} />
      </S.SharePageMain>
    </>
  );
}
