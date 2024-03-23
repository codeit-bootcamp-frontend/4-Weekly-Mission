import React from "react";
import { useEffect, useState } from "react";
import "../styles/FolderSharedPage.css";
import Footer from "../common/footer/Footer";
import NavigationBar from "../common/navigationBar/NavigationBar";
import Cards from "../components/Cards/Cards";
import SearchBar from "../common/searchBar/SearchBar";
import FolderInformation from "../components/FolderInformation/FolderInformation";
import { getSampleCards, getSampleUser } from "../services/api";
import { UserCard } from "./FolderPage";

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface SampleCard extends UserCard {
  createdAt: string;
  title: string;
  imageSource?: string;
}

export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource?: string;
  image_source?: string;
}

function FolderSharedPage() {
  const [folderOwners, setFolderOwners] = useState<Owner>();
  const [folderName, setFolderName] = useState<string>();
  const [sampleCards, setSampleCards] = useState<SampleCard[]>([]);
  const [sampleUserInfo, setSampleUserInfo] = useState<SampleUser>();

  const getSampleCardsInfo = async () => {
    const sampleCardsInfo = await getSampleCards();
    const { owner, name, link } = sampleCardsInfo.folder;
    setFolderOwners(owner);
    setFolderName(name);
    setSampleCards(link);
  };

  const getSampleUserInfo = async () => {
    const sampleUserInfo = await getSampleUser();
    setSampleUserInfo(sampleUserInfo);
  };

  useEffect(() => {
    getSampleCardsInfo();
    getSampleUserInfo();
  }, []);

  return (
    <div className="FolderPage">
      <header>
        <NavigationBar userInfo={sampleUserInfo} />
      </header>
      <main>
        <FolderInformation
          folderOwners={folderOwners}
          folderName={folderName}
        />
        <div className="content_container">
          <SearchBar />
          <Cards cards={sampleCards} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FolderSharedPage;
