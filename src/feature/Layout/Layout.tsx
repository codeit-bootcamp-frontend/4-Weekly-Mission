import { useGetUser } from "hooks/useGetUser";
import Footer from "../Footer/Footer";
import { NavigationBar } from "../NavigationBar/NavigationBar";

interface layoutProps {
  children: any;
  isNavFixed: boolean;
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
