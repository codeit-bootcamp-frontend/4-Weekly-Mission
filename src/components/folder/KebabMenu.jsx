import React from 'react';
import '../../style/kebabMenu.css';

function KebabMenu({ setModalState, link }) {
  const handleMenuClick = (e, target) => {
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
