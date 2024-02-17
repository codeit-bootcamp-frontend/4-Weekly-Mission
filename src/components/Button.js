import "./css/Button.module.css";

const Button = ({ children, className = null }) => {
  return <button className={`${className}`}>{children}</button>;
};

export default Button;
