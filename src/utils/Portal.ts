import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalType = {
  children: React.ReactNode;
  container: HTMLElement;
};

export const Portal = ({ children, container }: PortalType) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
