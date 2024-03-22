import "./Category.css";

const Category = ({
  buttonClicked,
  linkData,
  currentCategory,
  handleModalClick,
}: any) => {
  return (
    <div className="Category-wrapper">
      <div className="Categories">
        {linkData?.map((folder: any) => (
          <button
            className={
              folder.name === currentCategory
                ? "CategoryButton button-clicked"
                : "CategoryButton"
            }
            key={folder?.id}
            onClick={buttonClicked}
            data-id={folder?.id}
          >
            {folder?.name}
          </button>
        ))}
      </div>
      <button className="add-folder" onClick={handleModalClick} id="addFolder">
        폴더 추가하기 +
      </button>
    </div>
  );
};

export default Category;
