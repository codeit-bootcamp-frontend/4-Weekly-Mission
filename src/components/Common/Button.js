import './Button.css';

function Button({ className = '', text = '' }) {
  return <button className={className}>{text}</button>;
}

export default Button;
