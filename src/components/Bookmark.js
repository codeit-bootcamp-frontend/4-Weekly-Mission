import '../css/Bookmark.css';

function Bookmark({ folderInfo }) {
  return (
    <>
      <header>
        <div className="bookmark-frame">
          <div className="bookmark-owner">
            <img
              className="avatar"
              src={folderInfo.ownerProfileImg}
              alt="owner-profile-img"
            />
            <p className="owner-name">@{folderInfo.ownerName}</p>
            <p className="folder-name">{folderInfo.folderName}</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Bookmark;
