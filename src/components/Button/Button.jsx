import './Button.css';

function Button({ title = '', type = 'button', onClick, className = '' }) {
  const classNames = `Button ${className}`;
  return (
    <button type={type} className={classNames} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
