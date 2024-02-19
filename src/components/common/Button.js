import './Button.css';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="gradientButton">
      {children}
    </button>
  );
}
