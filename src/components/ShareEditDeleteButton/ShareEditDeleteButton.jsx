import "./ShareEditDeleteButton.css";

const ShareEditDeleteButton = ({ icon, text }) => {
  return (
    <button className="container">
      <img className="icon" src={icon} alt={`${text} 아이콘`} />
      <span className="text">{text}</span>
    </button>
  );
};

export default ShareEditDeleteButton;