import '../styles/Main.css';

function UserFolderNameArea({ folderName, userName, imgSrc }) {
  return (
    <main className="main">
      <img src={imgSrc} alt="프로필 사진" className="img-profile" />
      <p className="user-name">{userName}</p>
      <h1 className="title">{folderName}</h1>
    </main>
  );
}

export default UserFolderNameArea;
