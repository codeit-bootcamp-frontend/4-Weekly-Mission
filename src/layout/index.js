import { useState, useEffect } from "react";
import { getData } from "../data/getData";
import { NavigationBar } from "../Component/NavigationBar/NavigationBar"
import { Folder } from "../Component/Folder/Folder";
import { SearchBar } from "../Component/SearchBar/SearchBar";
import { CardList } from "../Component/CardList/CardList";
import { Footer } from "../Component/Footer/Footer";

export const Layout = () => {
  const [profile, setProfile] = useState(null);
  const [folder, setFolder] = useState(null);
  
  useEffect(() => {
    getData('user').then(setProfile);
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
        {folder? <Folder folder={folder} /> : null}
        <div className="Page-item">
          <SearchBar />
          {folder?.links.map((link) => (
              <CardList key={link?.id} {...link} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
