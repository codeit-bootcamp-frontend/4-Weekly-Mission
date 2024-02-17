import "../styles/button.css";

export function Button({ folderName, onClick }) {
  return (
    <button className="titleButton" onClick={onClick}>
      {folderName}
    </button>
  );
}
