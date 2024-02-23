import styled from "styled-components";

function CatagoryBtn({ name, onClick, folder }) {
  const handleFolderBtnClick = () => {
    const nextFolder = { ...folder };
    onClick(nextFolder);
  };

  return (
    <button folder={folder} onClick={handleFolderBtnClick}>
      {name}
    </button>
  );
}

function CatagoryBtns({ data, onClick }) {
  return (
    <div>
      <ul>
        <li>
          <CatagoryBtn onClick={onClick} folder={{}} name="전체" />
        </li>
        {data &&
          data.map((folder) => (
            <li key={folder?.id}>
              <CatagoryBtn
                folder={folder}
                onClick={onClick}
                name={folder?.name}
              />
            </li>
          ))}
      </ul>
      <button>추가하기</button>
    </div>
  );
}

export default CatagoryBtns;
