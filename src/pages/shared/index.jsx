import Footer from "../../components/footer/Footer";
import GNB from "../../components/gnb/GNB";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

const Shared = () => {
  return (
    <div>
      <GNB />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Shared;
