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
    const fetchCardData = async () => {
      try {
        const response = await fetch(SHARED_API_URL);
        const responseData = await response.json();
        const userProfileData = responseData.folder;
        const sharedCardData = responseData.folder.links.map((link: Share) => ({
          ...link,
          time: updatedDuration(link.createdAt),
          date: updatedDate(link.createdAt),
        }));
        setUserData(userProfileData);
        setSharedCardData(sharedCardData);
        console.log(userProfileData);
        console.log(sharedCardData);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <>
      <SharedHeader userData={userData} />
      <SharedMain cardData={sharedCardData} />
    </>
  );
};

export default Shared;
