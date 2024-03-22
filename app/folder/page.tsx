import { getLink } from '@/apis/api'

import { filterByKeyword } from '@/lib/searchData';

//server component: fetch data
import CardList from "@/components/card/CardList";
import FolderList from '@/components/folder/FolderList';

// client component: has State
import SearchBar from '@/components/searchBar/SearchBar';

import FolderName from "@/components/folder/FolderName";
import AddLink from '@/components/addLink/AddLink';

const getLinksData = async (folderId: string | null) => {
  try {
    const { data } = await getLink(folderId);

    return data;
  } catch {
    throw new Error('error');
  }
}

const FolderPage = async ({ searchParams }: any) => {
  const { name, id, keyword } = searchParams;
  const links = await getLinksData(id);

  if (keyword) {
    const filteredLinks = filterByKeyword(links, keyword);

    return (
      <>
        <AddLink />
        <div className='container-folder'>
          <SearchBar />
          <FolderList/>
          <FolderName currentFolderName={name}/>
          <CardList links={filteredLinks}/>
        </div>
      </>
    );
  }

  return (
    <>
      <AddLink />
      <div className='container-folder'>
        <SearchBar />
        <FolderList/>
        <FolderName currentFolderName={name}/>
        <CardList links={links}/>
      </div>
    </>
  );
};

export default FolderPage;
