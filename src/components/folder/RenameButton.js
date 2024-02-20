import rename from "../../images/pen.png";

function RenameButton() {
  return (
    <button className="share-rename-delete-button">
      <img src={rename} />
      이름 변경
    </button>
  );
}
export default RenameButton;
