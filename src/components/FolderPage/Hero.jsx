import "./Hero.css";
import { useUser } from "../../context/UserContext";

function Hero({ folder }) {
  const { name: userName, profileImageSource } = useUser();

  return (
    <div className="Hero flex-col items-center">
      <div className="Hero-profile flex-col items-center">
        {profileImageSource && (
          <img className="" src={profileImageSource} alt="profileImage" />
        )}
        {userName && <p>@{userName}</p>}
      </div>
      {folder?.folder?.name && (
        <h1 className="Hero-folderName">{folder?.folder?.name}</h1>
      )}
    </div>
  );
}

export default Hero;
