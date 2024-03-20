import { Header } from "../../components/Header";
import { CardList } from "../../components/CardList";
import { Profile } from "../../components/Profile/";
import { useEffect, useState } from "react";
import useGet from "../../hooks/useGet";
import Footer from "../../components/Footer/Footer";
import { END_POINT } from "../../constants";
import CardSearchInput from "../../components/CardListBox/CardSearchInput/CardSearchInput";
import styles from "./SharedPage.module.scss";

export default function SharedPage() {
  const [fetchData, setFetchData] = useState({
    name: null,
    owner: {
      name: null,
      profileImageSource: null,
    },
    links: [],
  });
  const { data, isLoading } = useGet(END_POINT.sharedLinks);
  const headerPosition = {
    position: "fixed",
  };

  useEffect(() => {
    if (!isLoading) {
      setFetchData(data.folder);
    }
  }, [data, isLoading]);

  return (
    <>
      <Header headerPosition={headerPosition} />
      <Profile fetchData={fetchData} />
      <section className={styles.CardListBox}>
        <CardSearchInput />
        <CardList links={fetchData.links} />
      </section>
      <Footer />
    </>
  );
}
