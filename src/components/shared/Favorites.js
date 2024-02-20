import { useEffect, useState } from "react";
import { GetFolder } from "../../data-access/api";

function Favorites() {
  const [folderName, setFolderName] = useState("");
  const [owner, setOwner] = useState({});

  useEffect(() => {
    const GetMyFolder = async () => {
      const result = await GetFolder();
      const { folder } = result;
      const { id, name: folderName, owner, links } = folder;
      setFolderName(folderName);
      setOwner(owner);
    };
    try {
      GetMyFolder();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="favorites flex flex-col justify-between items-center">
      <img width={60} src={owner.profileImageSource} />
      <p className="avatar-id">{owner.name}</p>
      <h1>{folderName}</h1>
    </div>
  );
}

export default Favorites;
