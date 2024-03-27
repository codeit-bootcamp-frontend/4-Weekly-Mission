import { useGetFolder } from "folder/data-access-folder";
import { Layout } from "sharing/feature-layout";
import { SharedLayout } from "page-layout/SharedLayout";
import { CardList } from "link/ui-card-list/CardList";
import { FolderInfo } from "folder/ui-folder-info";
import { ReadOnlyCard } from "link/ui-read-only-card";
import { SearchBar } from "link/ui-search-bar";

export const SharedPage = () => {
  const { data }: any = useGetFolder(); //fixme
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map(
              (
                link: any //fixme
              ) => (
                <ReadOnlyCard key={link?.id} {...link} />
              )
            )}
          </CardList>
        }
      />
    </Layout>
  );
};
