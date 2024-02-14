import { useEffect, useState } from "react";

const Hero = () => {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const data = await response.json();
        setFolderData(data);
      } catch (err) {
        console.log("Error fetching folder data: ", err);
      }
    };

    fetchFolderData();
  }, []);

  if (!folderData) {
    return null;
  }

  const folderProfileImage = folderData.folder.owner.profileImageSource;
  const folderName = folderData.folder.owner.name;
  const folderFavorite = folderData.folder.name;

  return (
    <div className="Hero-container">
      <section className="Hero">
        <img
          className="folderProfileImage"
          src={folderProfileImage}
          alt="폴더 프로필 이미지"
        />
        <p className="folderName">{folderName}</p>
        <p className="folderFavorite">{folderFavorite}</p>
      </section>
    </div>
  );
};

export default Hero;
