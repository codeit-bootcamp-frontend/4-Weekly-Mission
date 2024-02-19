import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import AddLink from "./Banner/AddLink";
import LenderingCards from "./Card/LenderingCards";
import NavButton from "../../utils/NavButton";
import api from "../../utils/api";

const FolderPage = () => {
  const [isLinkExist, setIsLinkExist] = useState(false);
  const [buttonsId, setButtonsId] = useState([]);
  const [clickedButtonId, setClickedButtonId] = useState(null);
  const [navButtonsTitle, setNavButtonsTitle] = useState([]);
  const objKey = ["data"];

  const linkExist = () => {
    setIsLinkExist(true);
  };
  const linkNotExist = () => {
    setIsLinkExist(false);
  };

  const handleClick = (index) => {
    setClickedButtonId(buttonsId[index]);
  };

  const fetchData = async () => {
    try {
      const result = await api("users/11/folders");
      setNavButtonsTitle(["전체", ...result.data.map((item) => item.name)]);
      setButtonsId([null, ...result.data.map((item) => item.id)]);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout
      children={[
        <>
          <AddLink />,
          {navButtonsTitle.map((button, index) => (
            <NavButton
              title={button}
              key={button}
              onClick={() => handleClick(index)}
            />
          ))}
          <LenderingCards
            linkExist={linkExist}
            linkNotExist={linkNotExist}
            query={`users/11/links${
              clickedButtonId ? "?folderId=" + clickedButtonId : ""
            }`}
            objKey={objKey}
          />
          ,
        </>,
      ]}
    />
  );
};

export default FolderPage;
