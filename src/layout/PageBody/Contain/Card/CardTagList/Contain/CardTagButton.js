import "./CardTagButton.css";

export const CardTagButton = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="tagButton">
      {name}
    </button>
  );
};
