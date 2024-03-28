import { useGetFolder } from '@/apis/useGetFolder';
import Layout from '@/components/feature/layout/Layout';
import SharedLayout from '@/layouts/SharedLayout/SharedLayout';
import CardList from '@/components/card/list/UiCardList';
import FolderInfo from '@/components/feature/folder/folderInfo/FolderInfo';
import ReadOnlyCard from '@/components/card/readOnly/ReadOnlyCard';
import SearchBar from '@/components/searchBar/SearchBar';
import { useState, useEffect } from 'react';

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

const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = (data as Data) || {};
  //검색 시 입력 값
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterLinks, setFilterLinks] = useState<Links[]>(links);

  useEffect(() => {
    if (searchValue !== '') {
      const filtered = links.filter(
        (link) =>
          link.alt.toLowerCase().includes(searchValue.toLowerCase()) ||
          link.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          link.url.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilterLinks(filtered);
    }
  }, [searchValue]);

  return (
    <Layout isSticky={true}>
      <SharedLayout
        folderInfo={
          <FolderInfo profileImage={profileImage} ownerName={ownerName} folderName={folderName} />
        }
        searchBar={<SearchBar setSearchValue={setSearchValue} />}
        searchValueText={searchValue}
        cardList={
          <CardList>
            {searchValue !== ''
              ? filterLinks?.map((link: any) => <ReadOnlyCard key={link?.id} {...link} />)
              : links?.map((link: any) => <ReadOnlyCard key={link?.id} {...link} />)}
          </CardList>
        }
      />
    </Layout>
  );
};

export default SharedPage;
