import { useGetFolder } from "folder/data-access-folder";
import { Layout } from "sharing/feature-layout";
import { SharedLayout } from "page-layout/SharedLayout";
import { CardList } from "link/ui-card-list";
import { FolderInfo } from "folder/ui-folder-info";
import { ReadOnlyCard } from "link/ui-read-only-card";
import { SearchBar } from "link/ui-search-bar";
import { useState, useEffect } from "react";

type Links = {
  id: number;
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
};

type Data = {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: Links[];
};

export const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = (data as Data) || {};
  //검색 시 입력 값
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterLinks, setFilterLinks] = useState<Links[]>([]);

  useEffect(() => {
    if (searchValue !== "") {
      const filtered = links.filter(
        (link) =>
          link.alt.toLowerCase().includes(searchValue.toLowerCase()) ||
          link.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          link.url.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilterLinks(filtered);
    }
  }, [searchValue]);

  return (
    <Layout isSticky={true}>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar setSearchValue={setSearchValue} />}
        searchValueText={searchValue}
        cardList={
          <CardList>
            {searchValue !== ""
              ? filterLinks?.map((link: any) => (
                  <ReadOnlyCard key={link?.id} {...link} />
                ))
              : links?.map((link: any) => (
                  <ReadOnlyCard key={link?.id} {...link} />
                ))}
          </CardList>
        }
      />
    </Layout>
  );
};
