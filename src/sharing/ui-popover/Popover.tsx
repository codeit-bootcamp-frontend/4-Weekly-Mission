import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import { MouseEvent, ReactNode, useCallback, useMemo, useRef } from "react";
import { Portal } from "../../sharing/ui-portal";
import { useBackgroundClick } from "../../sharing/util/useBackgroundClick";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  isOpen: boolean;
  anchorRef: any;
  anchorPosition: any;
  disableCloseWithBackgroundClick: boolean;
  onBackgroundClick: (e: MouseEvent) => void;
}

export const Popover = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  disableCloseWithBackgroundClick = false,
  onBackgroundClick,
}: Props) => {
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
    (event) => {
      const isPopover = popoverRef.current?.contains(event.target);
      const isAnchor = anchorRef.current?.contains(event.target);
      if (
        !isPopover &&
        !isAnchor &&
        !disableCloseWithBackgroundClick &&
        isOpen
      ) {
        onBackgroundClick();
      }
    },
    [
      popoverRef,
      anchorRef,
      disableCloseWithBackgroundClick,
      isOpen,
      onBackgroundClick,
    ]
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
