import { Footer } from "../Footer/Footer";
import { NavigationBar } from "../Nav";
import { useGetUser } from "../../data/useGetUser";

export const Layout = ({ children }) => {
  const { data } = useGetUser();
  const { email, image_source } = data?.data[0] || {};
  const profile = data?.data[0]
    ? { email, profileImageSource: image_source }
    : null;

  return (
    <div>
      <NavigationBar profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
