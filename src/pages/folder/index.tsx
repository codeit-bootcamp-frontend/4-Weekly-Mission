import { useGetFolders } from '@/apis/useGetFolders';
import { useGetLinks } from '@/apis/useGetLinks';
import Layout from '@/components/feature/layout/Layout';
import FolderLayout from '@/layouts/FolderLayout/FolderLayout';
import FolderToolBar from '@/components/folderToolBar/FolderToolBar';
import SearchBar from '@/components/searchBar/SearchBar';
import { useState, useEffect, useRef } from 'react';
import { ALL_LINKS_ID } from '@/utils/constant';
import LinkForm from '@/components/feature/linkForm/LinkForm';
import CardList from '@/components/feature/cardList/CardList';

const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState<string | number>(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const [searchValue, setSearchValue] = useState('');
  const [disableLinkForm, setDisableLinkForm] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observerFooter = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setDisableLinkForm(entry.isIntersecting);
      });
    });

    if (footerRef.current) {
      observerFooter.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observerFooter.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <Layout footerRef={footerRef} isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm disableLinkForm={disableLinkForm} />}
        searchBar={<SearchBar setSearchValue={setSearchValue} />}
        searchValueText={searchValue}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={links} searchValue={searchValue} />}
      />
    </Layout>
  );
};

export default FolderPage;
