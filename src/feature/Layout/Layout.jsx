import { useGetUser } from "data-access/useGetUser";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";

export const Layout = ({ children }) => {
  const { newData } = useGetUser();
  const { email, image_source } = newData || {};
  const profile = newData ? { email, image_source } : null;

  return (
    <div>
      <NavigationBar profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
