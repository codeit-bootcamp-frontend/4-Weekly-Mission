import React from "react";
import { SHARE, DELETE, PEN } from "./constant";
import "./CardOption.css";

export const CardOption = ({
  share = <img className="instance-node" src={SHARE} alt="공유 로고" />,
  pen = <img className="instance-node" src={PEN} alt="수정 로고" />,
  deleteIcon = <img className="instance-node" src={DELETE} alt="삭제 로고" />,
}) => {
  return (
    <div className="option">
      <div className="frame">
        {share}
        <div className="text-wrapper">공유</div>
      </div>
      <div className="frame">
        {pen}
        <div className="text-wrapper">이름 변경</div>
      </div>
      <div className="frame">
        {deleteIcon}
        <div className="text-wrapper">삭제</div>
      </div>
    </div>
  );
};
