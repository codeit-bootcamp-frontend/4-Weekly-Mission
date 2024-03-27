import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/Footer";
import UserSection from "../component/MainSection/UserSection/UserSection";
import CardList from "../component/MainSection/CardList/CardList";
import "./page.css";

const Shared = () => {
  return (
    <>
      <Navigation position="sticky" />
      <section className="main-section">
        <UserSection />
        <div className="wrap">
          <CardList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shared;
