import { useEffect, useState } from "react";
import { acceptDataFromApi } from "src/Utils/Api";
import * as S from "./SharePage.style";

// Components
import HeadNav from "src/components/BasicLayout/HeadNav";
import ShareFolderProfile from "src/pages/SharePage/Components/SharePageProfile";
import LinkSearchBar from "src/components/LinkCard/LinkSearchBar";
import LinkCardCollection from "src/components/LinkCard/LinkCardCollection";

// Types
import UserLinkDataType from "src/@types/UserLinkDataType";

/**
 *
 * @description /share 페이지를 구현하는 컴포넌트.
 * @returns
 */
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
