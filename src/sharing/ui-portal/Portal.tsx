import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ReactNode } from "react";

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement | null;
}

export const Portal = ({ children, container }: PortalProps) => {
  const [mountNode, setMountNode] = useState(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
