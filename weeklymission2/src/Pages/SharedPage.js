import { useState, useEffect } from "react";
import { SharedHeader } from "../Components/SharedHeader";
import { Footer } from "../Components/Footer";
import { Main } from "../Components/Main";
import { getSampleData } from "../APIs/PageApi";
import "../styles/Page.css";
import { useFolder } from "../useHooks/useFolder";

export function SharedPage() {
  const [profile, setProfile] = useState({ email: null, image: null });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await getSampleData();
    setProfile(userData);
  };

  const { folder, cardLinks } = useFolder();

  return (
    <>
      <SharedHeader profile={profile} folder={folder} />
      <Main cards={cardLinks} />
      <Footer />
    </>
  );
}
