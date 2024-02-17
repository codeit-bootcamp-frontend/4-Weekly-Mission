import Gnb from "../components/Gnb";
import Header from "../components/Header";
import LinkSearch from "../components/LinkSearch";
import Card from "../components/Card";
import Footer from "../components/Footer";

function SharedPage() {
  return (
    <>
      <Gnb />
      <Header />
      <LinkSearch />
      <Card />
      <Footer />
    </>
  );
}

export default SharedPage;
