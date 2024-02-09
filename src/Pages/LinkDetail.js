import { useParams } from "react-router-dom";
import Header from "../Components/Header";

const LinkDetail = () => {
  const { linkId } = useParams();
  return <>Here is {linkId}!</>;
};

export default LinkDetail;
