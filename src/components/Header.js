import logo from "../assets/logo.svg";
import "./Header.css";

function Header({ user }) {
  // const { email, profileImageSource } = user;
  if (!user) {
    // Render login button or any other login-related content
    return (
      <header>
        <div className="nav-space">
          <div className="nav">
            <a href="/">
              <img src={logo} alt={logo} />
            </a>
            <div>
              <button>Login</button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Destructure user properties only if user is truthy
  const { email, profileImageSource } = user;

  return (
    <header>
      <div className="nav-space">
        <div className="nav">
          <a href="/">
            <img src={logo} alt={logo} />
          </a>
          <div>
            <img
              className="logo"
              src={profileImageSource}
              alt={profileImageSource}
            />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </header>
  );

  // <header>
  //   <div className="nav-space">
  //     <div className="nav">
  //       <a href="/">
  //         <img src={logo} alt={logo} />
  //       </a>
  //       <div>
  //         <img
  //           className="logo"
  //           src={profileImageSource}
  //           alt={profileImageSource}
  //         />
  //         <span>{email}</span>
  //       </div>
  //       {/* {user ? (
  //         <div>
  //           <img
  //             className="logo"
  //             src={profileImageSource}
  //             alt={profileImageSource}
  //           />
  //           <span>{email}</span>
  //         </div>
  //       ) : (
  //         <div>
  //           <button>Login</button>
  //         </div>
  //       )} */}
  //     </div>
  //   </div>
  // </header>
}

export default Header;
