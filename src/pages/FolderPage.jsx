import { useGetFolders } from "folder/data-access-folder";
import { useGetLinks } from "link/data-access-link";
import { Layout } from "sharing/feature-layout";
import { FolderLayout } from "page-layout/FolderLayout";
import { CardList } from "link/ui-card-list";
import { FolderToolBar } from "folder/feature-folder-tool-bar";
import { LinkForm } from "link/ui-link-form";
import { SearchBar } from "link/ui-search-bar";
import { EditableCard } from "link/ui-editable-card";
import { useMemo, useState } from "react";
import { NoLink } from "link/ui-no-link";
import { ALL_LINKS_ID } from "link/data-access-link/constant";

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const cardList = useMemo(() => {
    if (loading) return null;
    if (links.length === 0) return <NoLink />;
    return (
      <CardList>
        {links.map((link) => (
          <EditableCard key={link?.id} {...link} />
        ))}
      </CardList>
    );
  }, [loading, links]);

  return (
    <Layout isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={cardList}
      />
    </Layout>
  );
};
