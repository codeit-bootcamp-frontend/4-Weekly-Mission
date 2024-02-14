function Header() {
  return (
    <header>
      <nav>
        <img className="main-logo" src="/assets/image/logo.svg" alt="링크라이브러리 로고." />
        <a className="btn-login" href="/pages/signin.html">로그인</a>
      </nav>
    </header>
  );
}

export default Header;