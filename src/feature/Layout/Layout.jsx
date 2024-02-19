import { useGetUser } from "data-access/useGetUser";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";

export const Layout = ({ children, isNavFixed }) => {
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
