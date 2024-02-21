const renderButton = ({ dataArray, activeButton, handleButtonClick }) => {
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
