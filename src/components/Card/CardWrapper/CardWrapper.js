import "./CardWrapper.css";

export const CardWrapper = ({ children, onMouseOver, onMouseLeave }) => {
  return (
    <div className="card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
