import { useState, useEffect } from "react";
import SharedHeader from "./Header/SharedHeader";
import SharedMain from "./Main/ShaerdMain";
import { SHARED_API_URL } from "constnats/constant";
import { updatedDate, updatedDuration } from "utils/createdAt";

interface Link {
  id: number;
  createdAt: string;
  url: string;
  description: string;
  imageSource: string;
  time?: string;
  date?: string;
}

const Shared = () => {
  const [cardData, setCardData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(SHARED_API_URL);
        const responseData = await response.json();
        const userProfileData = responseData.folder;
        const fetchData = responseData.folder.links.map((link: Link) => ({
          ...link,
          time: updatedDuration(link.createdAt),
          date: updatedDate(link.createdAt),
        }));
        setUserData(userProfileData);
        setCardData(fetchData);
        console.log(userProfileData);
        console.log(fetchData);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <>
      <SharedHeader userData={userData} />
      <SharedMain cardData={cardData} />
    </>
  );
};

export default Shared;
