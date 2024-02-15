import { useState, useEffect } from 'react';

export const useFolderData = (folderDataAPI) => {
  const [folder, setFolder] = useState({
    userName: null,
    userImage: null,
    name: null,
  });

  const [cardData, setCardData] = useState(null);
  useEffect(() => {
    getAPIData();
  }, []);

  const getAPIData = async () => {
    const { userName, userImage, name, cardData } = await folderDataAPI();

    setFolder({ userName, userImage, name });
    setCardData(cardData);
  };

  return {
    folder,
    cardData,
  };
};
