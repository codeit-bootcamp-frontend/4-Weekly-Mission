import SharedHeader from "../containers/SharedHeader";
import SharedContent from "../containers/SharedContent";
import CommonFooter from "../components/common/CommonFooter";

function SharedPage() {
  return (
    <div>
      <SharedHeader />
      <SharedContent />
      <CommonFooter />
    </div>
  );
}

export default SharedPage;
