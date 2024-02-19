import "./CardTagList.css";
import { useState, useEffect } from "react";

export const CardTagList = ({ children }) => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // 화면 너비가 768px보다 작으면
        setIsFloating(true); // Floating Action Button으로 변경
      } else {
        setIsFloating(false); // 그렇지 않으면 일반 버튼 유지
      }
    };

    // 페이지 로드시와 화면 크기 변경시 handleResize 함수 호출
    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 로드시 한 번 호출

    // Clean-up 함수 등록
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
