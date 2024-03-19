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

  useEffect(() => {
    if (!isLoading) {
      setFetchData(data.folder);
      console.log(data.folder.links[0]);
    }
  }, [data, isLoading]);

  return (
    <>
      <Header />
      <Profile fetchData={fetchData} />
      <CardList links={fetchData.links} />
      <Footer />
    </>
  );
}
