import { useEffect, useState } from "react";
import AddLinkInput from "../components/AddLinkInput";
import Gnb from "../components/Gnb";
import LinkSearch from "../components/LinkSearch";
import Footer from "../components/Footer";
import { getUsersFolder, getUsersLink } from "../components/Api";
import FolderItem from "../components/FolderItem";

function FolderPage() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const body = await getUsersFolder();
        setState(body.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Gnb />
      <AddLinkInput />
      <LinkSearch />
      <FolderItem usersFolderData={state} />
      <Footer />
    </>
  );
}

export default FolderPage;
