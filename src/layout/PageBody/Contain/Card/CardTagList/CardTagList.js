import "./CardTagList.css";
import { useState, useEffect } from "react";

export const CardTagList = ({ children }) => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); //

  return (
    <div className="Contain">
      <div className="CardTagList">
        {children}
        <div
          className={
            isFloating ? "CardTagListPlus floating" : "CardTagListPlus"
          }
        >
          폴더 추가 +
        </div>
      </div>
    </div>
  );
};
