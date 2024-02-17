import "./Hero.css";

function Hero({ folder }) {
  return (
    <div className="Hero flex-col items-center">
      <div className="Hero-profile flex-col items-center">
        <img
          src={folder?.folder?.owner?.profileImageSource}
          alt="profileImage"
        />
        <p>@{folder?.folder?.owner?.name}</p>
      </div>
      <h1 className="Hero-folderName">{folder?.folder?.name}</h1>
    </div>
  );
}

export default Hero;
