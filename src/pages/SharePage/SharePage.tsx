import { useEffect, useState } from "react";
import { acceptDataFromApi } from "src/Utils/Api";
import * as S from "./SharePage.style";

// Components
import HeadNav from "src/Components/BasicLayout/HeadNav";
import ShareFolderProfile from "src/pages/SharePage/Components/SharePageProfile";
import LinkSearchBar from "src/Components/LinkCard/LInkSearchBar/LinkSearchBar";
import LinkCardCollection from "src/Components/LinkCard/LinkCardCollection/LinkCardCollection";

// Types
import UserLinkDataType from "src/@types/UserLinkDataType";

/**
 *
 * @description /share 페이지를 구현하는 컴포넌트.
 * @returns
 */
export default function SharePage() {
  const [originItems, setOriginItems] = useState<UserLinkDataType[]>([]);
  const [items, setItems] = useState<UserLinkDataType[]>([]);
  const [cardFilter, setCardFilter] = useState<string>("");

  const handleShareLoad = async () => {
    const {
      folder: { links },
    } = await acceptDataFromApi("sample/folder");
    setOriginItems(links);
    setItems(links);
  };

  useEffect(() => {
    handleShareLoad();
  }, []);

  useEffect(() => {
    if (cardFilter === "") {
      setItems(originItems);
      return;
    }
    setItems(
      originItems.filter(
        (item: UserLinkDataType) =>
          item.title.includes(cardFilter) ||
          item.description.includes(cardFilter) ||
          item.url.includes(cardFilter)
      )
    );
  }, [cardFilter]);

  return (
    <>
      <HeadNav />
      <ShareFolderProfile />
      <S.SharePageMain>
        <LinkSearchBar cardFilter={cardFilter} setCardFilter={setCardFilter} />
        <LinkCardCollection items={items} />
      </S.SharePageMain>
    </>
  );
}
