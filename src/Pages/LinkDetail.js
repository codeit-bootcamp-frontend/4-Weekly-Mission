import { useParams } from "react-router-dom";
import Header from "../Components/Header";

const LinkDetail = () => {
  const { linkId } = useParams();
  return <h1>Here is {linkId}!</h1>;
};

export default LinkDetail;
