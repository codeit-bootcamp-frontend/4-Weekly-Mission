import "./Hero.css";

function Hero({ folder }) {
  return (
    <div className="Hero flex-col items-center">
      <div className="Hero-profile flex-col items-center">
        {folder && (
          <img
            src={folder?.folder?.owner?.profileImageSource}
            alt="profileImage"
          />
        )}
        {folder && <p>@{folder?.folder?.owner?.name}</p>}
      </div>
      {folder?.folder?.name && (
        <h1 className="Hero-folderName">{folder?.folder?.name}</h1>
      )}
    </div>
  );
}

export default Hero;
