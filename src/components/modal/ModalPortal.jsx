import { createPortal } from "react-dom"

function ModalPortal(component) {
  return createPortal(component, document.getElementById("modal"))
}

export default ModalPortal
