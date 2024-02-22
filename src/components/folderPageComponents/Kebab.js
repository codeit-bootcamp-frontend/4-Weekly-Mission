import React, { useContext, useEffect, useRef, useState } from 'react';
import kebab from '../../assets/Images/kebab.png';
import {
  PopOverWrapper,
  PopOver,
  PopOverButton,
} from '../../styles/styledComponents/common';
import { FolderPageContext } from '../../context/FolderPageContext';

export const Kebab = () => {
  const [openPopOver, setOpenPopOver] = useState(false);
  const kebabRef = useRef(null);
  const { clickPoint } = useContext(FolderPageContext);
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
            <PopOverButton>
              <p>추가하기</p>
            </PopOverButton>
          </PopOver>
        )}
      </PopOverWrapper>
    </>
  );
};
