import { useState } from "react";
import Layout from "../Layout/Layout";
import LenderingCards from "./Card/LenderingCards";
import Profile from "./Banner/Profile";

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
