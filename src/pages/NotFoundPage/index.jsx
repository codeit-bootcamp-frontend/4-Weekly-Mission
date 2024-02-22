import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div>잘못된 주소입니다.</div>
      <Link to="/">홈으로 돌아가기</Link>
    </>
  );
}
