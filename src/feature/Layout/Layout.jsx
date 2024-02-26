import { useGetUser as getUser } from "data-access/useGetUser";
import { Footer } from "../Footer";
import { useEffect, useState } from "react";
import { NavigationBar } from "feature/NavigationBar/NavigationBar";
import { DEFAULT_PROFILE_IMAGE } from "feature/NavigationBar/constant";

export const Layout = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    imageSource: DEFAULT_PROFILE_IMAGE,
  });

  const handleLoadUser = async () => {
    const { data } = await getUser();
    const { email, image_source } = data[0] || {};
    setUserInfo({
      email,
      imageSource: image_source,
    });
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <div>
      <NavigationBar userInfo={userInfo} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
