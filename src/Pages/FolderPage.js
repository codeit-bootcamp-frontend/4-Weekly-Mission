import { useState, useEffect } from "react";
import { FolderMain } from "../Components/FolderMain";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";
import { getProfile } from "../API/SharedPageApi";
import { FolderHeader } from "../Components/FolderHeader";

function FolderPage() {
  const [profile, setProfile] = useState(null);

  const getData = async () => {
    const userData = await getProfile();
    setProfile(userData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav profile={profile}></Nav>
      <FolderHeader></FolderHeader>
      <FolderMain></FolderMain>
      <Footer></Footer>
    </>
  );
}

export default FolderPage;
