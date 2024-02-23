import { DeletelinkModal, AddlinkModal } from "../../modals";
import { useState, useEffect, useRef } from "react";
import "./style.css";

export default function Popover({ data, onClose }) {
  const [isDeletelinkModalOpen, setIsDeletelinkModalOpen] = useState(false);
  const [isAddlinkModalOpen, setIsAddlinkModalOpen] = useState(false);
  const popoverRef = useRef();

  useEffect(() => {
    function closePopover(e) {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", closePopover);
    return () => {
      document.removeEventListener("mousedown", closePopover);
    };
  }, [onClose]);
  return (
    <>
      <div className="popover" ref={popoverRef}>
        <button
          className="popover-item"
          onClick={() => setIsDeletelinkModalOpen(true)}
        >
          삭제하기
        </button>
        <button
          className="popover-item"
          onClick={() => setIsAddlinkModalOpen(true)}
        >
          폴더에 추가
        </button>
        {isAddlinkModalOpen && (
          <AddlinkModal
            data={{ id: data.id, link: data.url }}
            onClose={() => onClose()}
          />
        )}
        {isDeletelinkModalOpen && (
          <DeletelinkModal
            data={{ id: data.id, link: data.url }}
            onClose={() => onClose()}
          />
        )}
      </div>
    </>
  );
}
