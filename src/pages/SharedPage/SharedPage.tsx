import { Header } from "@components/Header";
import { CardList } from "@components/CardList";
import { Profile } from "@components/Profile";
import Footer from "@components/Footer/Footer";
import { END_POINT } from "@/constants";
// import CardSearchInput from "@components/CardListBox/CardSearchInput/CardSearchInput";
import styles from "./SharedPage.module.scss";
import { CSSProperties, useEffect, useState } from "react";
import { FolderData, LinkProps } from "@/constants/index.types";
import useFetchFolder from "@/hooks/useFetchFolder";

export default function SharedPage() {
  const [fetchData, setFetchData] = useState<FolderData>();
  const [linksData, setLinksData] = useState<LinkProps[] | undefined>([]);
  // const [searchValue, setSearchValue] = useState("");
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

  //제대로 동작하지 않는것 같습니다
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = e.target.value;
  //   setSearchValue(inputValue);
  // };

  // useEffect(() => {
  //   if (searchValue !== "") {
  //     const filteredLinks = linksData?.filter((link) => {
  //       return Object.values(link).join("").includes(searchValue);
  //     });
  //     setLinksData(filteredLinks);
  //   } else {
  //     setLinksData(data?.links);
  //   }
  // }, [searchValue]);

  return (
    <>
      <Header headerPosition={headerPosition} />
      <Profile fetchData={fetchData} />
      <section className={styles.CardListBox}>
        {/* <CardSearchInput handleInputChange={handleInputChange} /> */}
        <CardList links={linksData} />
      </section>
      <Footer />
    </>
  );
}
