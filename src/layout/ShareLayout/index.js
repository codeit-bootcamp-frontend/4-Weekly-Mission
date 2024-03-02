import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../../data/getData";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { Folder } from "../../components/Folder/Folder";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { CardListShare } from "../../components/CardList/CardListShare";
import { Footer } from "../../components/Footer/Footer";
import "./index.css";

export const ShareLayout = () => {
  const [profile, setProfile] = useState(null);
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    getData("user").then(setProfile);
    getData("folder")
      .then((response) => {
        const { folder } = response;
        return folder;
      })
      .then(setFolder);
  }, []);

  return (
    <div>
      <NavigationBar profile={profile} />
      <div className="Page">
        {folder ? <Folder folder={folder} /> : null}
        <div className="Page-item">
          <SearchBar />
          <div className="CardList">
            {folder?.links.map((link) => (
              <CardListShare key={link?.id} {...link} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
