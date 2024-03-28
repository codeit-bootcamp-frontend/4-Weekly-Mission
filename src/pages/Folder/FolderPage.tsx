import FolderList from "../../component/FolderList";
import LinkAddInput from "../../component/LinkAddInput";
import LinkSearchInput from "../../component/LinkSearchInput";
import { useEffect, useState } from "react";
import {
  FolderListDatum,
  getSavedFolderList,
  getLinkData,
  LinkDatum,
} from "../../apis/api";
import LinkItems from "../../component/LinkItems";
import { Container, FolderName } from "./style";
import FolderOption from "../../component/FolderOption";
import MobileAddFolderButton from "../../component/MobileAddFolderButton";

const ALL: FolderListDatum = {
  id: "ALL",
  name: "전체",
  favorite: false,
  created_at: "",
  link: {
    count: 0,
  },
  user_id: 0,
};

const FolderPage = () => {
  const [folders, setFolders] = useState<FolderListDatum[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<FolderListDatum>(ALL);
  const [links, setLinks] = useState<LinkDatum[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getSavedFolderList();
        setFolders([ALL, ...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleClick = (e: { target: { id: string } }) => {
    const findFolder: any = folders.find(
      (item) => String(item.id) === e.target.id
    );

    setSelectedFolder(findFolder);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getLinkData(selectedFolder.id);
        setLinks(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [selectedFolder]);

  const handleSearchSubmit = (keyword: string) => {
    setLinks(
      links.filter(
        (link) =>
          link.url?.includes(keyword) ||
          link.title?.includes(keyword) ||
          link.description?.includes(keyword)
      )
    );
  };

  return (
    <>
      <LinkAddInput folders={folders} />
      <Container>
        <LinkSearchInput onSubmit={handleSearchSubmit} />
        <FolderList
          folders={folders}
          selectedFolder={selectedFolder}
          onClick={handleClick}
          // isLoading={isLoading}
        />
        <FolderName>
          {selectedFolder.name}
          <FolderOption selectedFolder={selectedFolder} />
        </FolderName>

        <LinkItems folders={folders} links={links} isLoading={isLoading} />
        <MobileAddFolderButton />
      </Container>
    </>
  );
};

export default FolderPage;
