export default function MainPageGNB({ isLogin = false }) {
  return (
    <nav>
      <div>
        <a>LinkBrary</a>
        {isLogin ? <span>로그인 프로필</span> : <a>로그인</a>}
      </div>
    </nav>
  );
}
