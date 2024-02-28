import '../css/Reset.css';
import '../css/Global.css';
import '../../css/Modal.css'
import { useState } from "react";

const FolderAddModal = ({ isOpen, closeModal }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  
  return (
    <>
    <div
      id='background'
      style={{
        display: isOpen ? 'flex' : 'none',
      }}>
      <div id='whiteBox'>
      <img id='closeBtn' src='/img/_close.png' alt='닫기 버튼' onClick={closeModal}/>
        <div id='title'>
          <div>
            <p
              style={{
                color: "#373740",
                fontSize: "2rem",
                fontWeight: "700",
              }}
            >
              폴더 추가
            </p>
          </div>
          <div>
            <input
              style={{
                display: "flex",
                gap: "1.5rem",
                width: "28rem",
                padding: "1.8rem 1.5rem",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                border: "1px solid var(--Linkbrary-gray20, #CCD5E3)",
                background: "var(--Linkbrary-white, #FFF)",
              }} placeholder="내용 입력" />
          </div>
        </div>
        <div>
          <button
            style={{
              width: "28rem",
              background: "linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)",
              padding: "1.6rem 2rem",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                color: "#F5F5F5",
                fontSize: "1.6rem",
                fontWeight: "600",
              }}
            >
              추가하기
            </p>
          </button>
        </div>
        </div>
      </div>
    </>
  );
};
export default FolderAddModal;