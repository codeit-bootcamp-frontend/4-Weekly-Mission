import React from "react";
import { useGetFolder } from "../../hooks/useGetFolder.tsx";
import Header from "./Header/Header.tsx";
import ReadCard from "./ReadCard.tsx";
import CardList from "../common/CardList/CardList.tsx";
import SearchBar from "../common/SearchBar/SearchBar.tsx";
import * as S from "./SharedStyled.tsx";

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
    <S.Shared>
      <Header
        profileImage={profileImage}
        ownerName={ownerName}
        folderInfo={folderName}
      />
      <S.Items>
        <SearchBar />
        <CardList>
          {links?.map((link) => (
            <ReadCard key={link?.id} {...link} />
          ))}
        </CardList>
      </S.Items>
    </S.Shared>
  );
}

export default Shared;
