/* eslint-disable no-undef */
import { Header } from "../../components/Header";
import { CardList } from "../../components/CardList";
import { Profile } from "../../components/Profile/";
import { useEffect, useState } from "react";
import useGet from "../../hooks/useGet";
import Footer from "../../components/Footer/Footer";

export default function SharedPage() {
  const url = `https://bootcamp-api.codeit.kr/api/sample/folder`;
  const [fetchData, setFetchData] = useState({
    name: null,
    owner: {
      name: null,
      profileImageSource: null,
    },
    links: [],
  });
  const { data, isLoading } = useGet(url);
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
      <CardList links={fetchData.links} />
      <Footer />
    </>
  );
}
