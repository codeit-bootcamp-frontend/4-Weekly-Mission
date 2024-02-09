import { useParams } from "react-router-dom";

const LinkDetail = () => {
  const { linkId } = useParams();
  return <>Here is {linkId}!</>;
};

export default LinkDetail;
