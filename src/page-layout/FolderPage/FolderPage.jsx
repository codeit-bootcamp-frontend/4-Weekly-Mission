import { AddLink } from "ui/AddLink";
import { SearchBar } from "ui/SearchBar";
import { CardList } from "ui/CardList";
import { EditableCard } from "ui/EditableCard";
import { useGetFolder } from "data-access/useGetFolder";
import { NoLink } from "ui/NoLink/NoLink";
import "./FolderPage.css";

export const FolderPage = () => {
  const { data } = useGetFolder();
  const { links } = data || {};

  return (
    <div className="FolderPage">
      <AddLink />
      <div className="FolderPage-items">
        <SearchBar />
        <CardList>
          {data ? (
            links?.map((link) => <EditableCard key={link?.id} {...link} />)
          ) : (
            <NoLink>저장된 링크가 없습니다</NoLink>
          )}
        </CardList>
      </div>
    </div>
  );
};
