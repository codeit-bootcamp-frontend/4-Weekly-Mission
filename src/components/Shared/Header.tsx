import '../../assets/styles/Header.css';
interface Owner {
  name: string;
  profileImageSource: string;
}

interface HeaderProps {
  name: string;
  owner: Owner;
}
const Header = ({ name, owner }: HeaderProps) => {
  return (
    <header>
      {name ? (
        <div className="header-container">
          <div className="owner-info">
            <img id="owner-img" src={owner.profileImageSource} alt="owner-profile-img" />
            <p id="owner-name">@{owner.name}</p>
          </div>
          <h1 id="folder-name">{name}</h1>
        </div>
      ) : (
        <h2 className="fail-data">소유자 정보를 가져오지 못했습니다.</h2>
      )}
    </header>
  );
};
export default Header;
