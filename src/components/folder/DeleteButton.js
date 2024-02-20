import deleteimg from "../../images/delete.png";

function DeleteButton() {
  return (
    <button className="share-rename-delete-button">
      <img src={deleteimg} />
      삭제
    </button>
  );
}
export default DeleteButton;
