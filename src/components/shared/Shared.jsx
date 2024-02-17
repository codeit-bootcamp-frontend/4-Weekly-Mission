import { getSharedFolderSample } from "../util/api";
import { useEffect, useState } from "react";
import SharedMain from "./SharedMain";

function Shared() {
  const [ownerProfile, setOwnerProfile] = useState(null);

  const handleSharedUserFolder = async () => {
    const result = await getSharedFolderSample();
    if (!result) return;

    const data = result.folder;
    setOwnerProfile(data);
  };

  useEffect(() => {
    handleSharedUserFolder();
  }, []);

  return <>{ownerProfile && <SharedMain ownerProfile={ownerProfile} />}</>;
}

export default Shared;
