import "./styles/Navbar.css";
import CTA from "./CTA";
import styled from "styled-components";

const LoginCTA = styled(CTA)`
  width: 128px;
  padding: 16px 20px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 80px;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

export default function NavBar({ profile }) {
  return (
    <nav className="gnb">
      <div className="gnb-items">
        <a href="/">
          <img className="gnb-logo" src="images/linkbrary.svg" alt="logo"></img>
        </a>
        {profile ? (
          <a className="gnb-profile" href="/profile">
            <img src={profile.image_source} alt="user profile"></img>
            <span className="gnb-email">{profile.email}</span>
          </a>
        ) : (
          <LoginCTA href="/login" as="a">
            로그인
          </LoginCTA>
        )}
      </div>
    </nav>
  );
}
