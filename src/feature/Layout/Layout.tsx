import { useGetUser } from "hooks/useGetUser";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
  isNavFixed?: boolean;
}

const Layout = ({ children, isNavFixed }: layoutProps) => {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isNavFixed={isNavFixed} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
