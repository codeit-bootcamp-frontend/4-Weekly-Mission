import SharedCard from "../components/SharedCard";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";

function ShearedPage() {
  return (
    <>
      <Header />
      <div>
        <SearchForm />
        <SharedCard />
      </div>
    </>
  );
}
export default ShearedPage;
