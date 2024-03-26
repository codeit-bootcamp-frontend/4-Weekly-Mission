import { Header } from "@components/Header";
import { CardList } from "@components/CardList";
import { Profile } from "@components/Profile";
import Footer from "@components/Footer/Footer";
import { END_POINT } from "@/constants";
import CardSearchInput from "@components/CardListBox/CardSearchInput/CardSearchInput";
import styles from "./SharedPage.module.scss";
import { CSSProperties, useEffect, useState } from "react";
import { FolderData, ObjectLink } from "@/constants/index.types";
import useFetchFolder from "@/hooks/useFetchFolder";

// sharedPage는 folderPage에서 작업 후 아직 반영이 안된것이 많은 상태입니다 고려해서 봐주셨으면 좋겠습니다.
export default function SharedPage() {
  const [profileData, setProfileData] = useState<FolderData>();
  const [linksData, setLinksData] = useState<ObjectLink[] | undefined>([]);
  const [searchValue, setSearchValue] = useState("");

  const { data: user } = useFetchFolder<FolderData>(END_POINT.SHARED_LINKS);
  const headerStyle: CSSProperties = {
    position: "fixed",
  };

  useEffect(() => {
    if (user) {
      setProfileData(user);
      setLinksData(user.links);
    }
  }, [user]);

  // 아직 shared page에서는 수정을 진행하지 않았습니다
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  useEffect(() => {
    if (searchValue !== "") {
      const filteredLinks = linksData?.filter((link) => {
        return Object.values(link)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setLinksData(filteredLinks);
    } else {
      setLinksData(linksData);
    }
  }, [searchValue]);

  return (
    <>
      <Header headerPosition={headerStyle} />
      <Profile fetchData={profileData} />
      <section className={styles.CardListBox}>
        <CardSearchInput
          value={searchValue}
          handleInputChange={handleInputChange}
        />
        <CardList links={linksData} />
      </section>
      <Footer />
    </>
  );
}
