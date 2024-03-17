import React from "react";
import style from "./cta.module.scss";

function Cta({src, children, className = ""}) {
  const classnames = `${style.cta} ${className}`;
  return (
    <div className={classnames}>
      <a href={src}>{children}</a>
    </div>
  );
}
export default Cta;

// width padding fontSize 인라인으로 다룰필요 없다
// width padding fontSize -> className으로 상황에따라 css적용하기
