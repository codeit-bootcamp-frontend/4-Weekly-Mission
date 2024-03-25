import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import { useCallback, useMemo, useRef } from "react";
import { Portal } from "../../sharing/ui-portal";
import { useBackgroundClick } from "../../sharing/util/useBackgroundClick";
import { ReactNode, RefObject, MouseEventHandler } from 'react';

interface PopoverProps {
  children: ReactNode;
  isOpen: boolean;
  anchorRef: RefObject<HTMLElement>;
  anchorPosition?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  disableCloseWithBackgroundClick?: boolean;
  onBackgroundClick: MouseEventHandler;
}

const cx = classNames.bind(styles);

export const Popover = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  disableCloseWithBackgroundClick = false,
  onBackgroundClick,
}: PopoverProps) => {
  const popoverRef = useRef(null);
  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? "unset",
      right: anchorPosition?.right ?? "unset",
      bottom: anchorPosition?.bottom ?? "unset",
      left: anchorPosition?.left ?? "unset",
    };
  }, [anchorPosition]);
  const handleBackgroundClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!(event.target instanceof Node)) {
        return;
      }
  
      const isPopover = popoverRef.current?.contains(event.target);
      const isAnchor = anchorRef.current?.contains(event.target);
      if (!isPopover && !isAnchor && !disableCloseWithBackgroundClick && isOpen) {
        onBackgroundClick(event);
      }
    },
    [popoverRef, anchorRef, disableCloseWithBackgroundClick, isOpen, onBackgroundClick]
  );
  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef.current}>
      <div className={cx("popover")} style={{ ...positionStyle }}>
        {children}
      </div>
    </Portal>
  );
};
