import { useState, useEffect } from "react";
import SharedHeader from "./Header/SharedHeader";
import SharedMain from "./Main/ShaerdMain";
import { SHARED_API_URL } from "constnats/constant";
import { updatedDate, updatedDuration } from "utils/createdAt";
import { Share } from "constnats/types";

const Shared = () => {
  const [sharedCardData, setSharedCardData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchSharedCardData = async () => {
      try {
        const response = await fetch(SHARED_API_URL);
        const responseData = await response.json();
        const userProfileData = responseData.folder;
        const sharedCardData = responseData.folder.links.map(
          (cardDataList: Share) => ({
            ...cardDataList,
            time: updatedDuration(cardDataList.createdAt),
            date: updatedDate(cardDataList.createdAt),
          })
        );
        setUserData(userProfileData);
        setSharedCardData(sharedCardData);
        console.log(userProfileData);
        console.log(sharedCardData);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchSharedCardData();
  }, []);

  return (
    <>
      <SharedHeader userData={userData} />
      <SharedMain cardData={sharedCardData} />
    </>
  );
};

export default Shared;
