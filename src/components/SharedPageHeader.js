import "./styles/SharedPageHeader.css";

export default function SharedPageHeader({ folder }) {
  return (
    <div className="shared-page-header">
      <div className="info-box">
        <div className="owner-profile">
          {folder?.owner && (
            <img
              className="owner-profile-image"
              src={folder.owner.profileImageSource}
              alt="owner's profile"
            ></img>
          )}
          <span className="owner-profile-name">@{folder?.owner?.name}</span>
        </div>
        <div className="folder-name">{folder?.name}</div>
      </div>
    </div>
  );
}
