import "../styles/button.css";

export function Button({
  folderName,
  onClick,
}: {
  folderName: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button className="titleButton" onClick={onClick}>
      {folderName}
    </button>
  );
}
