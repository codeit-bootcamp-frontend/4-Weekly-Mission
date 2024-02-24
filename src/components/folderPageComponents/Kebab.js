import React, { useContext, useEffect, useRef, useState } from 'react';
import kebab from '../../assets/Images/kebab.png';
import {
  PopOverWrapper,
  PopOver,
  PopOverButton,
} from '../../styles/styledComponents/common';
import { FolderPageContext } from '../../context/FolderPageContext';
import { cardLinkCount } from '../../assets/utils/cardLinkCount';

export const Kebab = ({ currentCardLink }) => {
  const [openPopOver, setOpenPopOver] = useState(false);
  const kebabRef = useRef(null);
  const {
    handleModalStatus,
    handleModalContent,
    category,
    folder,
    clickPoint,
  } = useContext(FolderPageContext);
  useEffect(() => {
    if (clickPoint === kebabRef.current) {
      setOpenPopOver(true);
    } else {
      setOpenPopOver(false);
    }
  }, [clickPoint]);

  const handlePopover = (e) => {
    e.preventDefault();
  };
  const folderName = category ? category.map((element) => element.name) : null;
  const linkCounts = folder && category ? cardLinkCount(category, folder) : [];

  const handleAddButton = (e) => {
    e.preventDefault();
    handleModalStatus();
    handleModalContent({
      ModalContent: 'AddLink',
      folderName: ['전체', ...folderName],
      linkCounts: linkCounts,
      currentCardLink: currentCardLink,
    });
  };

  return (
    <>
      <PopOverWrapper>
        <img
          ref={kebabRef}
          src={kebab}
          alt="kebab"
          width={21}
          height={17}
          onClick={handlePopover}
        ></img>
        {openPopOver && (
          <PopOver>
            <PopOverButton>
              <p>삭제하기</p>
            </PopOverButton>
            <PopOverButton onClick={handleAddButton}>
              <p>폴더에 추가</p>
            </PopOverButton>
          </PopOver>
        )}
      </PopOverWrapper>
    </>
  );
};
