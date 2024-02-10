import Cards from "./Cards";

export default function FolderView({ folder }) {
  return (
    <div>
      you are in {folder?.name}
      <br />
      owned by {folder?.owner?.name}
      {/* owner && <img src={owner.profileImageSource}></img> */}
      <Cards links={folder?.links} />
    </div>
  );
}
