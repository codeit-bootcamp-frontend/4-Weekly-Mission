<<<<<<< HEAD:src/pages/SharedPage.tsx
import { useGetFolder } from 'folder/data-access-folder';
import { Layout } from 'sharing/feature-layout';
import { SharedLayout } from 'page-layout/SharedLayout';
import { CardList } from 'link/ui-card-list';
import { FolderInfo } from 'folder/ui-folder-info';
import { ReadOnlyCard } from 'link/ui-read-only-card';
import { SearchBar } from 'link/ui-search-bar';
=======
import { useGetFolder } from "folder/data-access-folder";
import { Layout } from "sharing/feature-layout";
import { SharedLayout } from "page-layout/SharedLayout";
import { CardList } from "link/ui-card-list";
import { FolderInfo } from "folder/ui-folder-info";
import { ReadOnlyCard } from "link/ui-read-only-card";
import { SearchBar } from "link/ui-search-bar";
>>>>>>> part2-백승아-week9:src/pages/SharedPage.jsx

interface LinkData {
  id: number;
}

export const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo profileImage={profileImage} ownerName={ownerName} folderName={folderName} />
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link: LinkData) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};
