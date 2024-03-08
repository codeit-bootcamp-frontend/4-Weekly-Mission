import LandingHeader from "../../components/Landing/Header/LandingHeader";
import LandingMain from "../../components/Landing/Main/LandingMain";
import Navigation from "../../components/Navigation/Navigation";

const Landing = () => {
  return (
    <>
      <Navigation />
      <LandingHeader />
      <LandingMain />
    </>
  );
};

export default Landing;
