import './Button.css';

function Button({ title = '', type = 'button', className = '' }) {
  const classNames = `Button ${className}`;
  return (
    <button type={type} className={classNames}>
      {title}
    </button>
  );
}

export default Button;
