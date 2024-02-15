import "../assets/styles/Header.css";
const Header = ({ name, owner }) => {
  return (
    <header>
      {name ? (
        <div className="header_container">
          <div className="owner_info">
            <img id="owner_img" src={owner.profileImageSource} alt="owner_profile_img" />
            <p id="owner_name">@{owner.name}</p>
          </div>
          <h1 id="folder_name">{name}</h1>
        </div>
      ) : (
        <h2 className="fail_data">소유자 정보를 가져오지 못했습니다.</h2>
      )}
    </header>
  );
};
export default Header;