import React, { forwardRef } from "react";
import { useGetSampleUser } from "../hooks/useGetSampleUser";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Layout = forwardRef((props, ref) => {
  const { children } = props;
  const { data } = useGetSampleUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavBar profile={profile} />
      <main>{children}</main>
      <Footer ref={ref} />
    </div>
  );
});

export default Layout;
