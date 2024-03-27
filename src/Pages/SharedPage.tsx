import React from "react";
import { SharedHeader, Folder } from "../Components/SharedHeader";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";
import { Card, SharedMain } from "../Components/SharedMain";
import { useState, useEffect } from "react";
import { getFolder, getProfile } from "../API/SharedPageApi";

interface UserData {
  email: string;
  image: string;
}

interface FolderData {
  userProfileImage: string;
  userName: string;
  folderName: string;
  cardLinks?: Card[];
}

function SharedPage() {
  const [profile, setProfile] = useState<UserData | null>(null);
  const [folder, setFolder] = useState<FolderData>({
    userProfileImage: "",
    userName: "",
    folderName: "",
  });
  const [cardLinks, setCardLinks] = useState<Card[]>([]);

  const getData = async () => {
    const userData: UserData = await getProfile();
    const { userProfileImage, userName, folderName, cardLinks } =
      await getFolder();
    setProfile(userData);
    setFolder({ userProfileImage, userName, folderName });
    setCardLinks(cardLinks);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav profile={profile}></Nav>
      <SharedHeader folder={folder}></SharedHeader>
      <SharedMain cards={cardLinks}></SharedMain>
      <Footer></Footer>
    </>
  );
}

export default SharedPage;
