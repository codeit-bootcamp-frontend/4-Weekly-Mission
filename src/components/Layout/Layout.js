import { Fragment, useState, useEffect } from "react";
import { getUser } from "../../api/api";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    email: null,
    profileImageSource: null,
  });

  const getApiData = async () => {
    try {
      const userData = await getUser();
      setUserProfile(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <Fragment>
      <NavBar userProfile={userProfile} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
