import { useState, useEffect } from "react";
import { getData } from "../Data/getData";
import { NavigationBar } from "../Component/NavigationBar/NavigationBar"
import { Folder } from "../Component/Folder/Folder";
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
      <Folder folder={folder} />
      <Footer />
    </div>
  );
};
