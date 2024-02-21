import { getData } from "../api/api";
import { useEffect, useState } from "react";
import CardBox from "../components/CardBox";
import SearchBar from "../components/SearchBar";

function Shared() {
  const [linksData, setLinksData] = useState([]);

  const getFolderLinkData = async (options) => {
    try {
      const newFolder = await getData(options);
      const { folder } = newFolder;
      const { links } = folder;
      setLinksData(links);
    } catch (err) {
      console.error(err);
      setLinksData([]);
    }
  };

  useEffect(() => {
    getFolderLinkData({ path: "folder" });
  }, []);

  return (
    <>
      <section>
        <SearchBar />
        <CardBox linksData={linksData} />
      </section>
    </>
  );
}

export default Shared;
