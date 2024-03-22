import { useParams } from "react-router-dom";

const LinkDetail = () => {
  const { linkId } = useParams();
  return (
    <>
      <div className="component-default-margin">
        <h1>Here is {linkId}!</h1>
      </div>
    </>
  );
};

export default LinkDetail;
