import CatagoryBtns from "./CatagoryBtns";

function FoldersCatagory({ data, headFolder, onClick }) {
  return (
    <>
      <CatagoryBtns data={data} onClick={onClick} />
      <h1>{headFolder?.name ? headFolder?.name : "전체"}</h1>
    </>
  );
}

export default FoldersCatagory;
