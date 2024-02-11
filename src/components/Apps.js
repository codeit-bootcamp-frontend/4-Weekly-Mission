import Headers from "./Header";
import Navs from "./Nav";
import Article from "./Article";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

function Apps() {
  return (
    <>
      <Navs />
      <Headers />
      <div>
        <SearchForm />
        <Article />
      </div>
      <Footer />
    </>
  );
}

export default Apps;
