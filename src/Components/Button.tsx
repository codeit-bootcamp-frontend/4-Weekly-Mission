import React from "react";
import "../Styles/Button.css";

interface ButtonProps {
  folderName: string;
  id: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

export function Button({ folderName, onClick, id }: ButtonProps) {
  return (
    <button className="folderButton" onClick={(e) => onClick(e, id)}>
      {folderName}
    </button>
  );
}
