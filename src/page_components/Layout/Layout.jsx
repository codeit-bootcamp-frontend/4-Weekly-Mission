import { useGetSampleUser } from "../../api_connect/useGetSampleUser";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

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