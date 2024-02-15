import "./FolderPage.css";
import FolderPageHeader from "../components/FolderPageHeader";
import Cards from "../components/Cards";

export default function FolderPage() {
  return (
    <div>
      <FolderPageHeader />
      <Cards links={[]} />
    </div>
  );
}
