import { useEffect, useState } from "react";
import { FolderHeader } from "../Components/FolderHeader";
import { Footer } from "../Components/Footer";
import { FolderMain } from "../Components/FolderMain";
import { getUserData } from "../APIs/FolderPageApi";
import { useFiles } from "../useHooks/useFiles";
import "../styles/Page.css";

export function FolderPage() {
  const [profile, setProfile] = useState({ email: null, image: null });

  const links = useFiles();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await getUserData();
    setProfile(userData);
  };

  return (
    <>
      <FolderHeader profile={profile} />
      <FolderMain cards={links} />
      <Footer />
    </>
  );
}
