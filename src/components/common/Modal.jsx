import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 10px solid red;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
`;

// 화면을 가운데로 배치하는 법.
// position absolute를 사용해서 left, top 50%씩.
// 현재 요소의 절반 크기만큼 다 당겨줘야한다. transform: translate(-50%, -50%)

const ModalLayout = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 50px;
  border-radius: 15px;
  z-index: 9999;

  width: 360px;
  height: 240px;
`;

const CloseButton = styled.button`
  background-color: lightblue;
  border: none;
  border-radius: 50px;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
`;

export function ModalWithInput(Component) {
  return (props) => {
    return (
      <React.Fragment>
        <Component {...props}>
          <input type="text" />
        </Component>
      </React.Fragment>
    );
  };
}

function Modal({ children, title, isClose }) {
  return (
    <ModalLayout>
      <CloseButton onClick={isClose}>x</CloseButton>
      <h3>{title}</h3>
      {children}
      <button>변경하기</button>
    </ModalLayout>
  );
}

export default Modal;


