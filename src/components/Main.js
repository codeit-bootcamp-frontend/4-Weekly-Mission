function Main({ folderName, userName, profileImage }) {

  return (
    <main>
      <img src={profileImage} alt="Profile" />
      <p>{userName}</p>
      <h1>{folderName}</h1>
    </main>
  );
}

export default Main;