import ReactDOM from "react-dom";

//모달을 만드는 포탈
//부모 컴포넌트의 바깥에 렌더링 할 수 있게 해주는 기능
const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal");
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
