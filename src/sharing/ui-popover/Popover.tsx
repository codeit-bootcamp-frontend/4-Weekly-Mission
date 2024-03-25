import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import {
  MouseEvent,
  ReactNode,
  RefObject,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { Portal } from "sharing/ui-portal";
import { useBackgroundClick } from "sharing/util/useBackgroundClick";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  anchorRef: RefObject<HTMLElement>;
  anchorPosition?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  disableCloseWithBackgroundClick?: boolean;
  onBackgroundClick: () => void;
}

export const Popover = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  disableCloseWithBackgroundClick = false,
  onBackgroundClick,
}: Props) => {
  // 잘 모르겠어용
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? "unset",
      right: anchorPosition?.right ?? "unset",
      bottom: anchorPosition?.bottom ?? "unset",
      left: anchorPosition?.left ?? "unset",
    };
  }, [anchorPosition]);
  const handleBackgroundClick = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isPopover = popoverRef.current?.contains(target);
      const isAnchor = anchorRef.current?.contains(target);
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
