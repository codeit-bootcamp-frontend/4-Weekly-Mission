import styles from './Popover.module.scss';
import classNames from 'classnames/bind';
import React, { useCallback, useMemo, useRef } from 'react';
import { Portal } from '@/utils/Portal';
import { useBackgroundClick } from '@/utils/useBackgroundClick';

type AnchorPositionType = {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
};

type PopoverType = {
  children?: React.ReactNode;
  isOpen: boolean;
  anchorRef: React.RefObject<HTMLElement>;
  anchorPosition: AnchorPositionType;
  disableCloseWithBackgroundClick?: boolean;
  onBackgroundClick: () => void;
};

const cx = classNames.bind(styles);

const Popover = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  disableCloseWithBackgroundClick = false,
  onBackgroundClick,
}: PopoverType) => {
  const popoverRef = useRef<HTMLElement>(null);
  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? 'unset',
      right: anchorPosition?.right ?? 'unset',
      bottom: anchorPosition?.bottom ?? 'unset',
      left: anchorPosition?.left ?? 'unset',
    };
  }, [anchorPosition]);
  const handleBackgroundClick = useCallback(() => {
    const handleClick = (event: MouseEvent) => {
      const isPopover = popoverRef.current?.contains(event.target as Node);
      const isAnchor = anchorRef.current?.contains(event.target as Node);
      if (!isPopover && !isAnchor && !disableCloseWithBackgroundClick && isOpen) {
        onBackgroundClick();
      }
    };

    return handleClick;
  }, [popoverRef, anchorRef, disableCloseWithBackgroundClick, isOpen, onBackgroundClick]);

  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef.current as HTMLElement}>
      <div className={cx('popover')} style={{ ...positionStyle }}>
        {children}
      </div>
    </Portal>
  );
};

export default Popover;
