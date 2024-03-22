import React from "react";

interface Item {
  id: number;
  name: string;
}

interface RenderButtonProps {
  dataArray: Item[] | undefined;
  activeButton: string;
  handleButtonClick: (name: string) => void;
}

const renderButton = ({
  dataArray,
  activeButton,
  handleButtonClick,
}: RenderButtonProps) => {
  if (dataArray && Array.isArray(dataArray)) {
    return dataArray.map((item) => (
      <button
        key={item.id}
        className={activeButton === item.name ? "active" : ""}
        onClick={() => handleButtonClick(item.name)}
      >
        {item.name}
      </button>
    ));
  }
};

export default renderButton;
