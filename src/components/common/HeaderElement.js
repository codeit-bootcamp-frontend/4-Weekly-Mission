import styled from "styled-components";
import logo from "assets/Linkbrary.png";
import profile from "assets/icons/icon_myprofile.png";
import { getUserInfo } from "api/api";
import { useGetPromise } from "hooks/uesGetPromise";
import "styles/common.css";

function HeaderElement({ $positionval }) {
  const user = useGetPromise(getUserInfo);
  const { email, profileImageSource } = user;

  return (
    <Header $positionval={$positionval}>
      <img src={logo} alt="logo" />
      <div className="myProfile">
        {user ? (
          <div id="myProfileName">
            <div id="myProfile-back_img">
              <img
                src={profileImageSource ? profileImageSource : profile}
                id="myProfile-img"
                alt="myProfile-img"
              ></img>
            </div>
            <span id="myEmail">{email}</span>
          </div>
        ) : (
          <a href="/signup.html">
            <button id="LoginBtn" type="button">
              로그인
            </button>
          </a>
        )}
      </div>
    </Header>
  );
}

const Header = styled.div`
  background-color: var(--Grey_100);
  padding: 20px 200px;
  position: ${({ $positionval }) => ($positionval ? $positionval : "sticky")};
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    padding: 32px;
  }
  @media (max-width: 774px) {
    padding: 18px 32px;
  }
`;

export default HeaderElement;
