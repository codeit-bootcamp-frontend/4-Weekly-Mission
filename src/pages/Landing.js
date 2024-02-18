import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <h1>랜딩 페이지</h1>
      <button className="gradientButton" onClick={() => navigate("/folder")}>
        폴더 페이지 이동
      </button>
      <button className="gradientButton" onClick={() => navigate("/shared")}>
        공유 페이지 이동
      </button>
    </>
  );
}
