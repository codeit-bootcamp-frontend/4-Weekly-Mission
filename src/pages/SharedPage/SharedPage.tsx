import { Header } from "@components/Header";
import { CardList } from "@components/CardList";
import { Profile } from "@components/Profile";
import Footer from "@components/Footer/Footer";
import { END_POINT } from "@/constants";
// import CardSearchInput from "@components/CardListBox/CardSearchInput/CardSearchInput";
import styles from "./SharedPage.module.scss";
import { CSSProperties, useEffect, useState } from "react";
import { FolderData } from "@/constants/index.types";
import useFetchFolder from "@/hooks/useFetchFolder";

export default function SharedPage() {
  const [fetchData, setFetchData] = useState<FolderData>();
  const { data } = useFetchFolder<FolderData>(END_POINT.sharedLinks);
  const headerPosition: CSSProperties = {
    position: "fixed",
  };

  useEffect(() => {
    if (data) {
      setFetchData(data);
    }
  }, [data]);

  return (
    <>
      <Header headerPosition={headerPosition} />
      <Profile fetchData={fetchData} />
      <section className={styles.CardListBox}>
        {/* <CardSearchInput /> */}
        <CardList links={fetchData?.links} />
      </section>
      <Footer />
    </>
  );
}
