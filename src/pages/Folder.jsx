import Footer from "../component/Footer/Footer";
import Navigation from "../component/Navigation/Navigation";
import InputSection from "../component/InputSection/InputSection";
import "./page.css";

const Folder = () => {
  const apiURL = "https://bootcamp-api.codeit.kr/api/users/1";

  return (
    <>
      <Navigation position="static" url={apiURL} />
      <section className="main-section">
        <InputSection />
        <div className="wrap"></div>
      </section>
      <Footer />
    </>
  );
};

export default Folder;
