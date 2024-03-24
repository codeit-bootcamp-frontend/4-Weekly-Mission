import Profile from "./Profile";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { GetProfile } from "../api";
import Info from "./Info.js";

function Navbar() {
  const [myProfile, setMyProfile] = useState<Info>({} as Info);

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
        <img src={logo} alt="logo" />
        <Profile info={myProfile} />
      </nav>
    </header>
  );
}
export default Navbar;
