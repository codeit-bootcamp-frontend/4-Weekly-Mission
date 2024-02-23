import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
export const Layout = ({ sticky, profile, children }) => {
  return (
    <div>
      <NavigationBar sticky={sticky} profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
