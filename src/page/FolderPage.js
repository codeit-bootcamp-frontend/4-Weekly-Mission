import "../global.css";
import { PageBody } from "../layout/PageBody";
import { Layout } from "../layout/Pagelayout/Layout";
import { SearchBar } from "../layout/PageBody/Contain/Serch";
import { CardList } from "../layout/PageBody/Contain/Card/CardList";
import { useGetPages } from "../data/useGetPages";
import { ReadOnlyCard } from "../layout/PageBody/Contain/ReadOnlyCard";
import { SerchInfo } from "../layout/PageBody/Contain/SerchInfo";

function FolderPage() {
  const { data } = useGetPages();
  const { links } = data;

  return (
    <Layout>
      <PageBody
        addLink={<SerchInfo />}
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}

export default FolderPage;
