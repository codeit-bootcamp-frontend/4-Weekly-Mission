import { AddLink } from "ui/AddLink";
import { SearchBar } from "ui/SearchBar";
import { CardList } from "ui/CardList";
import { EditableCard } from "ui/EditableCard";
import { useGetFolder } from "data-access/useGetFolder";
import { Category } from "ui/Category";
import { useRef } from "react";
import "./FolderPage.css";

export const FolderPage = () => {
  const { data } = useGetFolder();
  const { links } = data || {};

  const handleButtonClick = (e) => {
    e.target.classList.contains("button-clicked")
      ? e.target.classList.remove("button-clicked")
      : e.target.classList.add("button-clicked");
  };

  return (
    <div className="FolderPage">
      <AddLink />
      <div className="FolderPage-items">
        <SearchBar />
        <Category buttonClicked={handleButtonClick} />
        <CardList>
          {links?.map((link) => (
            <EditableCard key={link?.id} {...link} />
          ))}
        </CardList>
      </div>
    </div>
  );
};
