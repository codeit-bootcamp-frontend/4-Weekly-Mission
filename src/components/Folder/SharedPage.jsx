import { useState } from "react";
import Layout from "../Layout/index.jsx";
import LenderingCards from "./LenderingCards.jsx";
import Profile from "./Banner/Profile/index.jsx";

const SharedPage = () => {
  const [isLinkExist, setIsLinkExist] = useState(false);
  const linkExist = () => {
    setIsLinkExist(true);
  };

  const linkNotExist = () => {
    setIsLinkExist(false);
  };

  const objKey = ["folder", "links"];

  return (
    <Layout
      children={[
        <Profile />,
        <LenderingCards
          linkExist={linkExist}
          linkNotExist={linkNotExist}
          query="sample/folder"
          objKey={objKey}
        />,
      ]}
    />
  );
};
export default SharedPage;
