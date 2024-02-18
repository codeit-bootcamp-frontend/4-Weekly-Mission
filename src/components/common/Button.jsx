import "./Button.css";

function Button({ className, children }) {
  return <button className={`Button ${className}`}>{children}</button>;
}

export default Button;
