import logo from "../images/logo.svg";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav({ isModalOpen, profileData }) {
  const navigate = useNavigate();
  return (
    <>
      {isModalOpen && (
        <nav>
          <div className="nav-content">
            <img
              onClick={() => navigate("/")}
              className="nav-content-img"
              src={logo}
              alt="로고"
            />
            <div className="nav-content-profile">
              <img
                className="profile-img"
                src={profileData?.image_source}
                alt="프로필"
              />
              <p className="profile-email">{profileData?.email}</p>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
