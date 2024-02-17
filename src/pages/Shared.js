import Header from "../components/Header";
import Nav from "../components/Nav";
import Cardlist from "../components/Cardlist";
import Footer from "../components/Footer";

function Shared() {
  return (
    <div>
      <Header />
      <Nav />
      <Cardlist />
      <Footer />
    </div>
  );
}

export default Shared;
