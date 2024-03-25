import { useGetFolder } from "../folder/data-access-folder";
import { Layout } from "../sharing/feature-layout";
import { SharedLayout } from "../page-layout/SharedLayout";
import { CardList } from "../link/ui-card-list";
import { FolderInfo } from "../folder/ui-folder-info";
import { ReadOnlyCard } from "../link/ui-read-only-card";
import { SearchBar } from "../link/ui-search-bar";

export interface Link {
  id: number | string;
  createdAt: Date;
  url: string;
  imageSource: string;
  title?: string;
  description?: string;
}

interface FolderData {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: Link[];
}

interface CardListProps {
  children: React.ReactNode;
}


export const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data as FolderData || {};

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo profileImage={profileImage} ownerName={ownerName} folderName={folderName} />
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
};
