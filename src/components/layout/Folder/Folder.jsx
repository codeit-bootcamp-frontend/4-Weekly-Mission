import './folder.css';

const Folder = ({ folder }) => {
  const { name, owner } = folder;
  return (
    <article className="folder-summary">
      <figure>
        <img src={owner.profileImageSource} alt={`${owner.name}의 프로필`} />
        <figcaption>@{owner.name}</figcaption>
      </figure>
      <header>
        <h2>{name}</h2>
      </header>
    </article>
  );
};

export default Folder;
