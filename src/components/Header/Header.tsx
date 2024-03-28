import css from "./Header.module.scss";

function Header({ folderData }: any) {
  return (
    <div className={css.Header}>
      <div className={css.headerProfileBox}>
        <img
          className={css.headerProfileImg}
          src={folderData.profileImg}
          alt="프로필 이미지"
        />
        <p className={css.profileName}>@{folderData.profileName}</p>
      </div>
      <h1 className={css.folderName}>{folderData.folderName}</h1>
    </div>
  );
}

export default Header;
