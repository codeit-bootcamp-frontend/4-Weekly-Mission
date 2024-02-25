import Profile from "./Profile.js";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { GetProfile } from "../api/api.js";

function Navbar() {
  const [myProfile, setMyProfile] = useState({});

  useEffect(() => {
    const GetMyProfile = async () => {
      const result = await GetProfile();
      setMyProfile(result);
    };

    try {
      GetMyProfile();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <header>
      <nav>
        <img src={logo} />
        <Profile info={myProfile} />
      </nav>
    </header>
  );
}
export default Navbar;
