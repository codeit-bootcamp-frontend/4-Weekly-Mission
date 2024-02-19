import "./CardTagList.css";

export const CardTagList = ({ children }) => {
  return (
    <div className="Contain">
      <div className="CardTagList">
        {children}
        <div className="CardTagListPlus">폴더추가+</div>
      </div>
    </div>
  );
};
