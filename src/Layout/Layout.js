import { useState, useEffect } from "react";
import { getData } from "../Data/getData";
import { NavigationBar } from "../Component/Nav/NavigationBar"

export const Layout = () => {
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    getData('user').then(setProfile);
  }, []);

  return (
    <div>
      <NavigationBar profile={profile} />
    </div>
  );
};
