import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import LinkAdd from "../components/LinkAdd";
import FolderSection from "../components/FolderSection";

function FolderPage() {
  return (
    <div className="FolderPage">
      <NavigationBar />
      <LinkAdd />
      <FolderSection />
      <Footer />
    </div>
  );
}
export default FolderPage;
