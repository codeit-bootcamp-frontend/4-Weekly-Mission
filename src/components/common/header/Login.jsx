import './Login.css';

function Login({ user }) {
  return (
    // eslint-disable-next-line
    <>
      {user ? (
        <div className="user-data">
          <img src={user.profileImageSource} alt="" className="user-data-img" />
          <p className="user-data-email">{user.email}</p>
        </div>
      ) : (
        <a href="./signin.html" className="button login">
          로그인
        </a>
      )}
    </>
  );
}
export default Login;
