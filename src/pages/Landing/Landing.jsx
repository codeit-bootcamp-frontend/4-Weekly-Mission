import LandingHeader from "../../components/Landing/Header/LandingHeader";
import LandingMain from "../../components/Landing/Main/LandingMain";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Navigation />
      <LandingHeader />
      <LandingMain />
      <Footer />
    </>
  );
};

export default Landing;
