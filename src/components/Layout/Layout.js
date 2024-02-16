import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import useGetUser from "../../hooks/useGetUser";

export const Layout = ({ children }) => {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
