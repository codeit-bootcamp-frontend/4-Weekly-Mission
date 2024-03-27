import { getSharedFolderSample } from "../../util/api";
import { useEffect, useState } from "react";
import SharedMain from "./SharedMain";
import { FolderData, LinksData } from "../../@types/FolderData";
import useInput from "../../hooks/useInput";

function Shared() {
  const [ownerProfile, setOwnerProfile] = useState<FolderData>({
    count: 0,
    id: 0,
    links: [
      {
        createdAt: "",
        description: "",
        id: 0,
        imageSource: "",
        title: "",
        url: "",
      },
    ],
    name: "",
    owner: { id: 0, name: "", profileImageSource: "" },
  });
  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useInput<LinksData>(ownerProfile.links);

  const handleSharedUserFolder = async () => {
    const result = await getSharedFolderSample();
    if (!result) return;

    const data = result.folder;
    setOwnerProfile(data);
    console.log(data);
  };

  useEffect(() => {
    handleSharedUserFolder();
  }, []);

  return (
    <>
      {ownerProfile && (
        <SharedMain
          filterdItem={filterdItem}
          handleInputChange={handleInputChange}
          handleInputClick={handleInputClick}
          inputValue={inputValue}
          isFocus={isFocus}
          closeButtonRef={closeButtonRef}
          handleCloseClick={handleCloseClick}
          ownerProfile={ownerProfile}
        />
      )}
    </>
  );
}

export default Shared;
