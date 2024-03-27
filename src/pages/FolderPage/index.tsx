import { useState, useEffect, useRef, ChangeEvent } from "react";
import { getFolderList, getLink } from "../../api/api";
import { Link, Folder } from "../../types";
import {
  CardList,
  OnlyCard,
  FolderHeader,
  FolderList,
  FolderOption,
  Layout,
  SearchBar,
} from "../../components";
import "./FolderPage.css";

const FolderPage = () => {
  const [folderList, setFolderList] = useState<Folder[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [selectName, setSelectName] = useState("전체");
  const [selectId, setSelectId] = useState<number | null>(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isAddLinkFixed, setIsAddLinkFixed] = useState(true);

  const addLinkRef = useRef<HTMLDivElement>(null);

  const handleLoadFolderList = async (option: { userId: number }) => {
    const folderListData = await getFolderList(option);
    setFolderList(folderListData.data);
  };

  const handleLoadLink = async (option: {
    userId: number;
    folderId: number | null;
  }) => {
    const linksData = await getLink(
      option as { userId: number; folderId: number }
    );
    setLinks(linksData.data);
  };

  const handleSelectFolderList = ({
    name,
    id,
  }: {
    name: string;
    id: number;
  }) => {
    setSelectName(name);
    if (name === "전체") {
      setSelectId(null);
    } else {
      setSelectId(id);
    }
  };

  const handleLinkAddInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.target.value);
  };

  const filteredLinks = links.filter((item) => {
    const searchFields = ["url", "title", "description"];
    return searchFields.some(
      (field) =>
        typeof item[field] === "string" &&
        (item[field] as string).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    handleLoadFolderList({ userId: 1 });
    handleLoadLink({ userId: 1, folderId: selectId });
  }, [selectId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAddLinkFixed(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const addLinkRefCurrent = addLinkRef.current;

    if (addLinkRefCurrent) {
      observer.observe(addLinkRefCurrent);
    }

    return () => {
      if (addLinkRefCurrent) {
        observer.unobserve(addLinkRefCurrent);
      }
    };
  }, []);

  return (
    <Layout>
      <div className="folderPage">
        <div ref={addLinkRef}>
          <FolderHeader
            folderList={folderList}
            linkUrl={linkUrl}
            handleLinkAddInputChange={handleLinkAddInputChange}
          />
        </div>

        <div className="folderPage-content">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {searchTerm.length ? (
            <div className="folderPage-searchResult">
              <span>{searchTerm}</span>으로 검색한 결과입니다.
            </div>
          ) : null}

          <FolderList
            folderList={folderList}
            selectId={selectId}
            onSelectFolderList={handleSelectFolderList}
          />
          <FolderOption folderName={selectName} />

          {!filteredLinks.length ? (
            <div className="folderPage-noLink">저장된 링크가 없습니다</div>
          ) : (
            <CardList>
              {filteredLinks.map((item) => (
                <OnlyCard key={item.id} items={item} folderList={folderList} />
              ))}
            </CardList>
          )}
        </div>
        {!isAddLinkFixed && (
          <FolderHeader
            folderList={folderList}
            linkUrl={linkUrl}
            handleLinkAddInputChange={handleLinkAddInputChange}
          />
        )}
      </div>
    </Layout>
  );
};

export default FolderPage;
