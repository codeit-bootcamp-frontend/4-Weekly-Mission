import CardList from "components/SharedPage/CardList/CardList";
import SearchInput from "components/SharedPage/SearchInput/SearchInput";
import { ChangeEvent } from "react";

interface Props {
  selectedModal: string;
  selectedId: string;
  selectedName: string;
  onSelectedFolder:({ name, id }: { name: string | null, id: number | string }) => void;
  loadingError: {
    message: string;
  }
  search: string;
  folderInfo:
    {
      id: number;
      url: string;
      createdAt: string;
      imageSource: string;
      title: string;
      description: string;
      links: [
    {
      id: number,
      url: string,
      createdAt: string,
      imageSource: string,
      title: string,
      description: string,
      links: string;
    }
  ]
  };
    handleCloseClick: (e: React.MouseEvent) => void;
  handleSearchChange: (e : ChangeEvent) => void;
  setModal: (value: string) => void;
}

function Main({ loadingError, search, folderInfo, handleSearchChange, handleCloseClick
 }: Props) {

  return (
    <>
      <SearchInput
        loadingError={loadingError}
        search={search}
        handleSearchChange={handleSearchChange}
        handleCloseClick={handleCloseClick}
      />
      <CardList links={folderInfo?.links} />
    </>
  );
}

export default Main;
