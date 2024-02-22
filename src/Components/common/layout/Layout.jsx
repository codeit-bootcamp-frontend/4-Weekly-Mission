import React from "react";

function Wrapper({ children, className = "" }) {
  return <div className={`${className} container`}>{children}</div>;
}

export default Wrapper;
