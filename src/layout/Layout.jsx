import { useGetSampleUser } from "../hooks/useGetSampleUser";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Layout = ({ children }) => {
  const { data } = useGetSampleUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavBar profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
