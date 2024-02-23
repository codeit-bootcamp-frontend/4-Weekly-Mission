import CatagoryBtns from "./CatagoryBtns";

function FoldersCatagory({ data, headFolder, onClick }) {
  return (
    <>
      <CatagoryBtns data={data} onClick={onClick} />
      <div>
        <h1>{headFolder?.name ? headFolder?.name : "전체"}</h1>
        {headFolder?.name ? (
          <div>
            <button>공유</button>
            <button>이름변경</button>
            <button>삭제</button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default FoldersCatagory;
