import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  container?: HTMLElement | null;
}

export const Portal = ({ children, container }: PropsWithChildren<Props>) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
