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

export default function SharedPage() {
  const [fetchData, setFetchData] = useState<FolderData>();
  const [linksData, setLinksData] = useState<ObjectLink[] | undefined>([]);
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState("");

  const { data } = useFetchFolder<FolderData>(END_POINT.sharedLinks);
  const headerPosition: CSSProperties = {
    position: "fixed",
  };

  useEffect(() => {
    if (data) {
      setFetchData(data);
      setLinksData(data.links);
    }
  }, [data]);

  const handleSearchInputCancel = () => {
    setSearchValue("");
    setLinksData(data?.links);
    setValue("");
  };

  //제대로 동작하지 않는것 같습니다
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
  // 여기까지

  return (
    <>
      <Header headerPosition={headerPosition} />
      <Profile fetchData={fetchData} />
      <section className={styles.CardListBox}>
        <CardSearchInput
          value={value}
          handleInputChange={handleInputChange}
          handleSearchInputCancel={handleSearchInputCancel}
        />
        <CardList links={linksData} />
      </section>
      <Footer />
    </>
  );
}
