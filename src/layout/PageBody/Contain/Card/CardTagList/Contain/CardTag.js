import { CardTagButton } from "./CardTagButton";

export const CardTag = ({ name, onClick }) => {
  return (
    <div className="frameTag">
      <CardTagButton onClick={onClick} name={name}></CardTagButton>
    </div>
  );
};
