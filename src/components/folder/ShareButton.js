import share from "../../images/share.png";

function ShareButton() {
  return (
    <button className="share-rename-delete-button">
      <img src={share} />
      공유
    </button>
  );
}
export default ShareButton;
