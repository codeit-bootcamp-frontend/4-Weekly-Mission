import "./Folder.css";

const Folder = ({ profile, name, title }) => {
  return (
    <div className="Folder">
      <img className="Folder-profile" src={profile} alt="프로필" />
      <span className="Folder-name">{name}</span>
      <h2 className="Folder-title">{title}</h2>
    </div>
  );
};

export default Folder;
