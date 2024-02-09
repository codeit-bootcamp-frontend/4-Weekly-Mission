import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Avatar from "../Components/Avatar";
import "./css/Folder.css";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import { getFolder, getUser } from "../api";
import { Link } from "react-router-dom";

const Folder = () => {
  const [user, setUser] = useState({ email: null, profileImageSource: null });
  const [folderInfo, setFolderInfo] = useState({
    folderName: null,
    folderOwner: null,
    folderOwnerImage: null,
    folderLinks: [],
  });

  const handleLoadUser = async () => {
    const { email, profileImageSource } = await getUser();
    if (!email) return;
    setUser({ email: email, profileImageSource: profileImageSource });
  };

  const handleLoadFolder = async () => {
    const folderInfo = await getFolder();
    setFolderInfo({
      folderName: folderInfo["folder"]["name"],
      folderOwner: folderInfo["folder"]["owner"]["name"],
      folderOwnerImage: folderInfo["folder"]["owner"]["profileImageSource"],
      folderLinks: folderInfo["folder"]["links"],
    });
  };

  useEffect(() => {
    handleLoadUser();
    handleLoadFolder();
  }, []);

  return (
    <>
      <Header
        userEmail={user.email}
        userProfileImage={user.profileImageSource}
      />
      <div className="folder-info">
        <div className="folder-owner">
          <Avatar
            avatarImage={folderInfo.folderOwnerImage}
            width="60px"
            height="60px"
          ></Avatar>
          <div className="font-thin font-16px">@{folderInfo.folderOwner}</div>
        </div>
        <div className="font-regular font-40px">{folderInfo.folderName}</div>
      </div>
      <main>
        <SearchBar />
        <div className="card-list">
          {folderInfo.folderLinks.map((link) => {
            const { imageSource, createdAt, description } = link;
            return (
              <Link to={`/link/${link.id}`} key={link.id} target="_blank">
                <Card
                  cardImage={imageSource}
                  cardCreated={createdAt}
                  cardDescription={description}
                />
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Folder;
