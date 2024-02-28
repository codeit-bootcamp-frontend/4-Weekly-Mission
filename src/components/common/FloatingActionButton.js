import './FloatingActionButton.css';

export default function FloatingActionButton({ onClick }) {
  return (
    <button className="fabContainer" onClick={onClick}>
      <div className="fabButton">폴더추가 +</div>
    </button>
  );
}
