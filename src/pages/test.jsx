import { useState } from "react";
import Modal from "../components/modal/Modal";

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const clickHandler = (type) => {
    setIsOpen(!isOpen);
    setModalType(type);
  };

  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <h1>Modal Test Page</h1>
      <button onClick={() => clickHandler("폴더 이름 변경")}>
        폴더 이름 변경
      </button>
      <button onClick={() => clickHandler("폴더 추가")}>폴더 추가</button>
      <button onClick={() => clickHandler("폴더 공유")}>폴더 공유</button>
      <button onClick={() => clickHandler("폴더 삭제")}>폴더 삭제</button>
      <button onClick={() => clickHandler("링크 삭제")}>링크 삭제</button>
      <button onClick={() => clickHandler("폴더에 추가")}>폴더에 추가</button>
      <Modal isOpen={isOpen} modalType={modalType} />
    </div>
  );
};

export default TestPage;
