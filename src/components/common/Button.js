import './Button.css';

/**
 *
 * @param {text, onClick, className } param0
 * @returns <button>
 */
const Button = ({
  text,
  onClick,
  className = 'button back_gra_purpleblue',
}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
