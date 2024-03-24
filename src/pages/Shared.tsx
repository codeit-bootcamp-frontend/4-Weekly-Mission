import { getData } from "../api/api";
import { useEffect, useState } from "react";
import CardBox from "../components/CardBox";
import SearchBar from "../components/SearchBar";
//types
import { Link } from "../types/commonTypes";

function Shared() {
  const [linksData, setLinksData] = useState<Link[]>([]);

  const getFolderLinkData = async (options: { path?: string }) => {
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
    <section>
      <SearchBar />
      <CardBox linksData={linksData} />
    </section>
  );
}

export default Shared;
