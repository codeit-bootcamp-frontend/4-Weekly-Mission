import { useParams } from "react-router-dom";
import Header from "../components/sharing/Header";

const LinkDetail = () => {
  const { linkId } = useParams();
  return (
    <>
      <Header />
      <div className="component-default-margin">
        <h1>Here is {linkId}!</h1>
      </div>
    </>
  );
};

export default LinkDetail;
