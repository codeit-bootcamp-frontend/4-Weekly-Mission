import { getProfile } from "../api";
import useFetch from "./hooks/useFetch";
import Loading from "./Loading";
import logo from "../assets/Linkbrary.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavDiv = styled.div`
  display: flex;
  padding: 18px 32px 17px 32px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: var(--Linkbrary-bg, #f0f6ff);

  @media ${(props) => props.theme.tabletS} {
    padding: 33px 32.5px 32px 32.5px;
  }

  @media ${(props) => props.theme.desktop} {
    padding: 33px 200px 32px 200px;
  }
`;

const ContainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  img {
    width: 88.667px;
    height: 16px;
  }

  @media ${(props) => props.theme.tabletS} {
    img {
      width: 133px;
      height: 24px;
    }
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  p {
    display: none;
  }

  @media ${(props) => props.theme.tabletS} {
    p {
      display: block;
      color: var(--Linkbrary-gray100, #373740);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export default function NavBar() {
  const profileApi = useFetch(() => getProfile());

  return (
    <NavDiv>
      <ContainDiv>
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
        {profileApi.status === "idle" && <button>로그인</button>}
        {profileApi.status === "fetching" && <Loading size="small" />}
        {profileApi.status === "success" && (
          <ProfileDiv>
            <img
              src={profileApi.data?.profileImageSource}
              alt="사용자의 프로필 사진"
            />
            <p>{profileApi.data?.email}</p>
          </ProfileDiv>
        )}
        {profileApi.status === "error" && <p>{profileApi.error.message}</p>}
      </ContainDiv>
    </NavDiv>
  );
}
