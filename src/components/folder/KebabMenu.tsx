import React from 'react';
import '../../style/kebabMenu.css';

interface Link {
  id: string;
  url: string;
}

type ModalState = {
  visibility: boolean;
  target: string;
  url?: string;
};

type ModalStateUpdater = React.Dispatch<React.SetStateAction<ModalState>>;

interface KebabMenuProps {
  setModalState: ModalStateUpdater;
  link: { url: string };
}


function KebabMenu({ setModalState, link }: KebabMenuProps) {
  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>, target: string) => {
    e.stopPropagation();
    setModalState({
      visibility: true,
      target: target,
      url: link.url,
    });
  };

  return (
    <div className="kebab-wrapper">
      <button onClick={(e) => handleMenuClick(e, '삭제하기')}>삭제하기</button>
      <button onClick={(e) => handleMenuClick(e, '폴더에 추가')}>
        폴더에 추가
      </button>
    </div>
  );
}

export default KebabMenu;
