import { useState, useEffect } from "react";
import { getData } from "../../data/getData";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { AddLinkBar } from "../../components/AddBar/AddLinkBar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { FolderMenu } from "../../components/FolderMenu/FolderMenu";
import { Footer } from "../../components/Footer/Footer";
import "./index.css";

export const FolderLayout = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getData("user").then(setProfile);
  }, []);

  return (
    <div>
      <NavigationBar profile={profile} />
      <AddLinkBar />
      <div className="Page">
        <div className="Page-item">
          <SearchBar />
          <FolderMenu />
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
