function ButtonList({ buttonData }) {
  return (
    <div className="button_list">
      {buttonData.map((button) => (
        <button>{button.name}</button>
      ))}
    </div>
  );
}

export default ButtonList;
