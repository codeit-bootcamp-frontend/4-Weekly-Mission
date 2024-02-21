import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { useGetFolder } from "../hooks/useGetFolder";
import getSample from "../util/getSample";
import Folder from "../components/Folder/Folder";

const SharedPage = () => {
  const [folder, setFolder] = useState(null);
  const { data } = useGetFolder();
  console.log(data ?? "a");
  useEffect(() => {
    getSample("folder")
      .then((res) => {
        const { folder } = res;
        return folder;
      })
      .then(setFolder);
  }, []);
  return (
    <>
      <NavigationBar />
      <main className="App__main">{folder && <Folder folder={folder} />}</main>
      <Footer />
    </>
  );
};

export default SharedPage;
