import Modal from "components/FolderPage/Modal/Modal";
import CardList from "components/SharedPage/CardList/CardList";
import SearchInput from "components/SharedPage/SearchInput/SearchInput";
import { ChangeEvent, useState } from "react";

interface Props {
  selectedModal: string;
  selectedId: string;
  selectedName: string;
  links: [{
    id: number;
    url: string;
    createdAt: string;
    imageSource: string;
    title: string;
    description: string;
  }];
  onSelectedFolder:({ name, id }: { name: string | null, id: number | string }) => void;
  loadingError: {
    message: string;
  }
  search: string;
  folderListInfo: [{ id: string; name: string; link:{count : number}}];
  handleSearchChange: (e : ChangeEvent) => void;
  setModal: (value: string) => void;
}

function Main({
  selectedModal,
  selectedId,
  selectedName,
  links,
  onSelectedFolder,
  loadingError,
  search,
  folderListInfo,
  handleSearchChange,
  setModal,
}:Props) {
  const [selectedLink, setSeletedLink] = useState("");

  const setLink = (link: string) => {
    setSeletedLink(link);
  };
  return (
    <>
      <Modal
        selectedModal={selectedModal}
        setModal={setModal}
        folderName={selectedName}
        selectedLink={selectedLink}
        folders={folderListInfo}
        selectedId={selectedId}
      />
      <SearchInput
        loadingError={loadingError}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <CardList links={links} setModal={setModal}
              setLink={setLink} />
    </>
  );
}

export default Main;
