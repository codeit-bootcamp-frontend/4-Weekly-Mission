import { Footer } from "../Footer/Footer";
import { NavigationBar } from "../Nav";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
