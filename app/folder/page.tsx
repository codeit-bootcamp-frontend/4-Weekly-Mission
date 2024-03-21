//server component
import CardList from "@/components/card/CardList";
import FolderList from '@/components/folder/FolderList';

import FolderName from "@/components/folder/FolderName";
import AddLink from '@/components/addLink/AddLink';
import SearchBar from '@/components/searchBar/SearchBar';

const FolderPage = ({ searchParams }: any) => {
  const { name, id } = searchParams;

  return (
    <>
      <AddLink />
      <div className='container-folder'>
        <SearchBar />
        <FolderList></FolderList>
        <FolderName currentFolderName={name}/>
        <CardList folderName={name} folderId={id}/>
      </div>
    </>
  );
};

export default FolderPage;
