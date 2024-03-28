import Nav from "../components/Common/Nav";
import Footer from "../components/Common/Footer";

const Main = () => {
  return (
    <>
      <Nav sticky={true} />
      <main>메인</main>
      <Footer />
    </>
  );
};

export default Main;
