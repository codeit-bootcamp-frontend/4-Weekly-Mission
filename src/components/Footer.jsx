import styled from "styled-components";
import facebook from "../assets/shared/akar-icons_facebook-fill.svg";
import twitter from "../assets/shared/akar-icons_twitter-fill.svg";
import youtube from "../assets/shared/akar-icons_youtube-fill.svg";
import instagram from "../assets/shared/ant-design_instagram-filled.svg";

const BackgroundDiv = styled.div`
  display: flex;
  height: 160px;
  padding: 32px 32px 64px 32px;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background: #111322;
  p {
    margin: 0;
  }

  @media ${(props) => props.theme.tabletS} {
    padding: 32px 104px 64px 104px;
    flex-shrink: 0;
    margin-top: 60px;
  }
`;

const ContainerDiv = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template:
    "footer-links sns"
    ". ." 1fr
    "copyright .";
  width: 100%;
  gap: 30px;
  @media ${(props) => props.theme.tabletS} {
    display: flex;
    justify-content: space-between;
    grid-template: "copyright footer-links sns";
  }
`;

const RightContentsDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  grid-area: sns;
`;

const TextDiv1 = styled.div`
  display: flex;
  grid-area: copyright;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  color: #676767;
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TextDiv2 = styled.div`
  display: flex;
  grid-area: footer-links;
  width: 181.111px;
  align-items: flex-start;
  gap: 30px;
  color: #cfcfcf;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function Footer() {
  return (
    <BackgroundDiv>
      <ContainerDiv>
        {/* <LeftContentsDiv> */}
        <TextDiv1>
          <p>©codeit - 2023</p>
        </TextDiv1>
        <TextDiv2>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </TextDiv2>
        {/* </LeftContentsDiv> */}
        <RightContentsDiv>
          <img
            src={facebook}
            alt="facebook 로고"
            onClick={() => {
              window.open("https://www.facebook.com/", "_blank");
            }}
          />
          <img
            src={twitter}
            alt="twitter 로고"
            onClick={() => {
              window.open("https://twitter.com/", "_blank");
            }}
          />
          <img
            src={youtube}
            alt="youtube 로고"
            onClick={() => {
              window.open("https://www.youtube.com/", "_blank");
            }}
          />
          <img
            src={instagram}
            alt="instagram 로고"
            onClick={() => {
              window.open("https://www.instagram.com/", "_blank");
            }}
          />
        </RightContentsDiv>
      </ContainerDiv>
    </BackgroundDiv>
  );
}

export default Footer;
