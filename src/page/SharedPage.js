import "../global.css";
import { PageBody } from "../layout/PageBody";
import { Layout } from "../layout/Pagelayout/Layout";
import { PageInfo } from "../layout/PageBody/Contain/PageInfo";
import { SearchBar } from "../layout/PageBody/Contain/Serch";
import { CardList } from "../layout/PageBody/Contain/Card/CardList";
import { ReadOnlyCard } from "../layout/PageBody/Contain/ReadOnlyCard";
import { useGetShareInfo } from "../data/useGetShareInfo";

function SharedPage() {
  const { info } = useGetShareInfo();
  const { profileImage, ownerName, pageName, links } = info;

  return (
    <Layout>
      <PageBody
        pageInfo={
          <PageInfo
            profileImage={profileImage}
            ownerName={ownerName}
            pageName={pageName}
          />
        }
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

export default SharedPage;
