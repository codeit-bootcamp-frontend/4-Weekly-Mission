import { useParams } from "react-router-dom";
import Header from "../components/Header";

const LinkDetail = () => {
  const { linkId } = useParams();
  return (
    <>
      <Header />
      <h1>Here is {linkId}!</h1>
    </>
  );
};

export default LinkDetail;
