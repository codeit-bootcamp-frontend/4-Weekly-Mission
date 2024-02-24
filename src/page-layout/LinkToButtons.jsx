import { Button } from "StyledComponents/Buttons";
import { Link } from "react-router-dom";

export function LinkToButtons() {
  return (
    <div>
      <Link to="/shared">
        {" "}
        <Button>shared</Button>
      </Link>
      <Link to="/folder">
        {" "}
        <Button>folder</Button>
      </Link>
      <Link to="/addFolderModal">
        {" "}
        <Button>폴더 추가 모달</Button>
      </Link>
      <Link to="/renameModal">
        {" "}
        <Button>폴더 이름 변경 모달</Button>
      </Link>
      <Link to="/folderShared">
        {" "}
        <Button>폴더 공유 모달</Button>
      </Link>
      <Link to="/deleteFolder">
        {" "}
        <Button>폴더 삭제 모달</Button>
      </Link>
      <Link to="/deleteLink">
        {" "}
        <Button>링크 삭제 모달</Button>
      </Link>
      <Link to="/addToFolder">
        {" "}
        <Button>폴더에 추가 모달</Button>
      </Link>
    </div>
  );
}
