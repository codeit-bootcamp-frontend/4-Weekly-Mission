import { useGetUser } from "data-access/useGetUser";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";

export const Layout = ({ children }) => {
  const { data } = useGetUser();
  const { email, image_source } = data || {};
  const profile = data ? { email, image_source } : null;

  return (
    <div>
      <NavigationBar profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
