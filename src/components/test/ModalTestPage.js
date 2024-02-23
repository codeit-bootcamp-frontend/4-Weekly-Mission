import ModalPortal from "./ModalPortal";
import Modal from "./Modal";
import { useState } from "react";

function ModalTestPage({ props }) {
  const [modalOn, setModalOn] = useState(false);
  const [modal, setmodal] = useState(0);

  const handleModal = (id) => {
    setModalOn(!modalOn);
    setmodal(id);
  };

  console.log(modal);
  console.log(modalOn);

  if (modal === 1) {
    return (
      <Modal
        onClose={handleModal}
        title={"폴더 이름 변경"}
        btnName={"변경하기"}
      />
    );
  } else if (modal === 2) {
    return (
      <ModalPortal>
        {" "}
        <Modal onClose={handleModal} title={"폴더추가"} btnName={"추가하기"} />
      </ModalPortal>
    );
  }

  return (
    <>
      <button
        id="1"
        onClick={() => handleModal("1")}
        style={{ width: "50px", height: "50px" }}
      >
        1번 버튼
      </button>
      <button
        id="2"
        onClick={() => handleModal("2")}
        style={{ width: "50px", height: "50px" }}
      >
        2번 버튼
      </button>
      <button
        id="3"
        onClick={() => handleModal("3")}
        style={{ width: "50px", height: "50px" }}
      >
        3번 버튼
      </button>
      <button
        id="4"
        onClick={() => handleModal("4")}
        style={{ width: "50px", height: "50px" }}
      >
        4번 버튼
      </button>
      <button
        id="5"
        onClick={() => handleModal("5")}
        style={{ width: "50px", height: "50px" }}
      >
        5번 버튼
      </button>
      <button
        id="6"
        onClick={() => handleModal("6")}
        style={{ width: "50px", height: "50px" }}
      >
        6번 버튼
      </button>

      <ModalPortal modal={modal}>
        {
          modalOn && (
            <Modal
              onClose={handleModal}
              title={"폴더추가"}
              btnName={"추가하기"}
            />
          )
          // (() => {
          // if (modal === 1) {
          //   return (
          //     <Modal
          //       onClose={handleModal}
          //       title={"폴더 이름 변경"}
          //       btnName={"변경하기"}
          //     />
          //   );
          // } else if (modal === 2) {
          //   return (
          //     <Modal
          //       onClose={handleModal}
          //       title={"폴더추가"}
          //       btnName={"추가하기"}
          //     />
          //   );
          // }
          //   return null;
          // })()
        }
      </ModalPortal>
    </>
  );
}

export default ModalTestPage;
