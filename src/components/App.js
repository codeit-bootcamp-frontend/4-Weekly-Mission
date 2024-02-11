import CardList from "./CardList";
import LinkSearch from "./LinkSearch";
import "./App.css";
import "./common.css";
import logo from "../images/logo.png";
import facebook from "../images/akar-icons_facebook-fill.png";
import twitter from "../images/akar-icons_twitter-fill.png";
import youtube from "../images/akar-icons_youtube-fill.png";
import instagram from "../images/ant-design_instagram-filled.png";
import { useEffect, useState } from "react";
import { GetProfile, GetFolder } from "./api";
import Profile from "./profile.js";

function App() {
  const [myProfile, setMyProfile] = useState({});
  const [myFolder, setMyFolder] = useState({});
  const [id, setId] = useState("");
  const [folderName, setFolderName] = useState("");
  const [owner, setOwner] = useState({});
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const GetMyProfile = async () => {
      const result = await GetProfile();
      setMyProfile(result);
    };
    const GetMyFolder = async () => {
      const result = await GetFolder();
      setMyFolder(result);
      const { folder } = result;
      const { id, name: folderName, owner, links } = folder;
      setId(id);
      setFolderName(folderName);
      setOwner(owner);
      setLinks(links);
    };
    try {
      GetMyProfile();
      GetMyFolder();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <header>
          <nav>
            <img src={logo} />
            <Profile info={{}} />
          </nav>
        </header>
        <div className="favorites flex flex-col justify-between items-center">
          <img width={60} src={owner.profileImageSource} />
          <p className="avatar-id">{owner.name}</p>
          <h1>{folderName}</h1>
        </div>
      </div>
      <div className="linkSearch-CardList">
        <LinkSearch />
        <CardList links={links} />
      </div>
      <footer className="bg-black flex justify-between">
        <div className="codeit">ⓒcodeit - 2023</div>
        <div className="privacy-faq">
          <a className="privacy" href="">
            Privacy Policy
          </a>
          <a className="faq" href="">
            FAQ
          </a>
        </div>
        <div className="social flex">
          <a href="https://www.facebook.com/">
            <img className="icon" src={facebook} />
          </a>
          <a href="https://twitter.com/?lang=en">
            <img className="icon" src={twitter} />
          </a>
          <a href="https://www.youtube.com/">
            <img className="icon" src={youtube} />
          </a>
          <a href="https://www.instagram.com/">
            <img className="icon" src={instagram} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
