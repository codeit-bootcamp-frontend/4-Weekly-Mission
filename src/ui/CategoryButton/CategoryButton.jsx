import "./CategoryButton.css";

export const CategoryButton = ({ children, buttonClicked }) => {
  return (
    <button className="CategoryButton" onClick={buttonClicked}>
      {children}
    </button>
  );
};
