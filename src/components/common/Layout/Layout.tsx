import React, { ReactNode } from "react";
import NavigationBar from "../NavigationBar/NavigationBar.tsx";
import Footer from "../Footer/Footer.tsx";

interface LayoutProps {
  isSticky: boolean;
  profile: {
    profileImageSource: string;
    email: string;
  };
  children: ReactNode;
}

export const Layout = ({ isSticky, profile, children }: LayoutProps) => {
  return (
    <div>
      <NavigationBar isSticky={isSticky} profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
