import "../global.css";
import { useState } from "react";
import { PageBody } from "../layout/PageBody";
import { Layout } from "../layout/Pagelayout/Layout";
import { SearchBar } from "../layout/PageBody/Contain/Serch";
import { CardList } from "../layout/PageBody/Contain/Card/CardList";
import { useGetPages } from "../data/useGetPages";
import { ReadOnlyCard } from "../layout/PageBody/Contain/ReadOnlyCard";
import { SerchInfo } from "../layout/PageBody/Contain/SerchInfo";
import { NullCardList } from "../layout/PageBody/Contain/Card/NullCardList/NullCardList";
import { useGetTag } from "../data/useGetTag";
import { CardTag } from "../layout/PageBody/Contain/Card/CardTagList/Contain/CardTag";
import { CardTagList } from "../layout/PageBody/Contain/Card/CardTagList/CardTagList";

function FolderPage() {
  const { data } = useGetPages();
  const { tagData } = useGetTag();
  const { links } = data;
  const { tagData_links } = tagData;
  const [folderId, setFolderId] = useState(null);

  const handleTagClick = (folderId) => {
    setFolderId(folderId);
    console.log(folderId);
  };

  return (
    <Layout>
      <PageBody
        addLink={<SerchInfo />}
        searchBar={<SearchBar />}
        tagList={
          <CardTagList>
            <CardTag name="전체" onClick={() => handleTagClick(null)} />
            {tagData_links?.map((link) => (
              <CardTag
                onClick={() => handleTagClick(link?.folder_id)}
                key={link?.id}
                {...link}
              />
            ))}
          </CardTagList>
        }
        cardList={
          links ? (
            <CardList folderId={folderId}>
              {links
                .filter(
                  (link) => folderId === null || link.folder_id === folderId
                )
                .map((link) => (
                  <ReadOnlyCard key={link?.id} {...link} />
                ))}
            </CardList>
          ) : (
            <NullCardList />
          )
        }
      />
      <div>{folderId}</div>
    </Layout>
  );
}

export default FolderPage;
