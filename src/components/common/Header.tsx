import "./Header.css";
import styled from "styled-components";
import { useRecoilValueLoadable } from "recoil";
import { userData } from "../../store/store";
import { Profile } from "../../types/type";

interface HeaderFixedProps {
  fixed: boolean;
}

interface HeaderProfileProps {
  contents: Profile;
}

const CommonHeader = styled.header<HeaderFixedProps>`
  position: ${({ fixed }) => (fixed ? "fixed" : "static")};
`;

function HeaderProfile({ contents }: HeaderProfileProps) {
  return (
    <>
      {contents ? (
        <a className="profileText" href="https://www.naver.com/">
          <img src={contents.profileImageSource} alt="프로필 아이콘" />
          {contents.email}
        </a>
      ) : (
        <a className="login" href="/signin">
          로그인
        </a>
      )}
    </>
  );
}

function Header({ fixed }: HeaderFixedProps) {
  const { contents } = useRecoilValueLoadable<HeaderProfileProps>(userData);
  return (
    <CommonHeader fixed={fixed}>
      <div>
        <h1>
          <a
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.png)`,
            }}
            href="/"
          >
            Linkbrary
          </a>
        </h1>
        <HeaderProfile contents={contents} />
      </div>
    </CommonHeader>
  );
}

export default Header;
