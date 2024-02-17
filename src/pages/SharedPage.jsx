import SharedFooter from "../components/SharedFooter";
import SharedHeader from "../components/SharedHeader";
import SharedContent from "../containers/SharedContent";

function SharedPage() {
  return (
    <div>
      <SharedHeader />
      <SharedContent />
      <SharedFooter />
    </div>
  );
}

export default SharedPage;
