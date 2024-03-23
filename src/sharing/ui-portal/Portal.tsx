import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
//react children typescript type 검색해보기 : 젤 기본이 되는걸로

export const Portal = ({ children, container }) => {
  const [mountNode, setMountNode] = useState(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
