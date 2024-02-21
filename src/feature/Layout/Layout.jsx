import { useGetUser as getUser } from "data-access/useGetUser";
import { Footer } from "../Footer";
import { useEffect, useState } from "react";
import { NavigationBar } from "feature/NavigationBar/NavigationBar";

export const Layout = ({ children }) => {
  const [userEmail, setUserEmail] = useState();
  const [userImgSource, setUserImgSource] = useState();

  const handleLoadUser = async () => {
    const { data } = await getUser();
    const { email, image_source } = data[0] || {};
    setUserEmail(email);
    setUserImgSource(image_source);
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <div>
      <NavigationBar userEmail={userEmail} userImgSource={userImgSource} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
