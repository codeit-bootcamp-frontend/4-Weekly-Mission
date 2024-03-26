import { getLink } from '@/apis/api'

import { filterByKeyword } from '@/lib/searchData';

//server component: fetch data
import FolderList from '@/components/folder/FolderList';
import ModalList from '@/components/modals/list/ModalList';

// client component: has State
import SearchBar from '@/components/searchBar/SearchBar';

import CardList from "@/components/card/CardList";
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
  console.log(typeof links)

  if (keyword) {
    const filteredLinks = filterByKeyword(links, keyword);

    return (
      <>
        <AddLink />
        <div className='container-folder'>
          <SearchBar />
          <FolderList/>
          <FolderName currentFolderName={name}/>
          <CardList links={filteredLinks}><ModalList/></CardList>
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
        <CardList links={links}><ModalList/></CardList>
      </div>
    </>
  );
};

export default FolderPage;
