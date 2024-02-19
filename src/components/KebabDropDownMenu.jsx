import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import KebabIcon from './icons/KebabIcon';
import DropdownMenuItem from './DropdownMenuItem';

const KebabDropdownMenu = ({
  isActive,
  onClick,
  linkId,
  onDelete,
  onAddToFolder,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClick(linkId);
      }
    }

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive, onClick, linkId]);

  return (
    <div ref={dropdownRef}>
      <KebabIcon
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          onClick(linkId);
        }}
      />
      {isActive && (
        <DropdownMenu>
          <DropdownMenuItem
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              // onDelete(linkId) 삭제 기능 추가 예정
            }}
          >
            삭제하기
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              // onAddToFolder(linkId) 폴더 추가 기능 추가 예정
            }}
          >
            폴더에 추가
          </DropdownMenuItem>
        </DropdownMenu>
      )}
    </div>
  );
};

export default KebabDropdownMenu;

const DropdownMenu = styled.div`
  width: 7rem;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;

  @media (max-width: 767px) {
    right: 0px;
  }
`;
