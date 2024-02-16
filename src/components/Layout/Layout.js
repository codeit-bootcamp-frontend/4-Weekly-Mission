import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import useGetUser from "../../hooks/useGetUser";

export const Layout = ({ sticky, children }) => {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar sticky={sticky} profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
