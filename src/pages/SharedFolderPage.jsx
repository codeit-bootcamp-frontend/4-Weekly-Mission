import { useEffect, useState } from "react";
import { Hero, SearchBar, CardList } from "../components/common";
import "./SharedFolderPage.css";
import { getSharedFolder } from "../api";

function SharedFolderPage() {
  const [folder, setFolder] = useState({});

  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const result = await getSharedFolder();
        setFolder(result);
      } catch (error) {
        alert(error);
      }
    };

    fetchFolderData();
  }, []);

  return (
    <main>
      <Hero>
        <div className="SharedFolderPage-folderProfile container flex-col items-center">
          <div className="SharedFolderPage-userProfile flex-col items-center">
            <img
              src={folder?.folder?.owner?.profileImageSource}
              alt="userProfileImage"
            />
            <p>@{folder?.folder?.owner?.name}</p>
          </div>
          <h1 className="SharedFolderPage-folderName">
            {folder?.folder?.name}
          </h1>
        </div>
      </Hero>
      <div className="container SharedFolderPage-cardsContainer">
        <SearchBar className="SharedFolderPage-SearchBar" />
        <CardList folder={folder?.folder?.links} />
      </div>
    </main>
  );
}

export default SharedFolderPage;
