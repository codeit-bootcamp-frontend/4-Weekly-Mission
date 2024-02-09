/**
 * @param {object} props
 * @param {node} children
 * @param { func } onClick 버튼 클릭 이벤트
 * @param { boolean } disabled 버튼 활성화 여부
 * @param { string } className
 */
const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
