import { FolderOptionMenu } from "../FolderOptionMenu";
import "./FolderOption.css";

interface Props {
  folderName: string;
}

export const FolderOption = ({ folderName }: Props) => {
  return (
    <div className="folderOption">
      <div className="folderOption-folderName">{folderName}</div>
      {folderName === "전체" ? (
        <></>
      ) : (
        <FolderOptionMenu folderName={folderName} />
      )}
    </div>
  );
};
