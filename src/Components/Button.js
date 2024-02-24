import "../Styles/Button.css";

export function Button({ folderName, onClick }) {
  return (
    <button className="folderButton" onClick={onClick}>
      {folderName}
    </button>
  );
}
