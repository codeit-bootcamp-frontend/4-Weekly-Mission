import Delete from "./Delete";
import Rename from "./Rename";
import Share from "./Share";

const ActionMenuButtons = () => {
  return [
    <Share name="공유" />,
    <Rename name="이름 변경" />,
    <Delete name="삭제" />,
  ];
};

export default ActionMenuButtons;
