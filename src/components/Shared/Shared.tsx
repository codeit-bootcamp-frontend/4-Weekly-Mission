import React from "react";
import { useGetFolder } from "../../hooks/useGetFolder.tsx";
import Header from "./Header/Header.tsx";
import ReadCard from "./ReadCard.tsx";
import CardList from "../common/CardList/CardList.tsx";
import SearchBar from "../common/SearchBar/SearchBar.tsx";
import "./Shared.css";

interface SharedProps {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: Link[];
}

interface Link {
  id?: number;
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
}

function Shared() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } =
    (data as SharedProps) || {};

  return (
    <div className="Shared">
      <Header
        profileImage={profileImage}
        ownerName={ownerName}
        folderInfo={folderName}
      />
      <div className="Shared-items">
        <SearchBar />
        <CardList>
          {links?.map((link) => (
            <ReadCard key={link?.id} {...link} />
          ))}
        </CardList>
      </div>
    </div>
  );
}

export default Shared;
