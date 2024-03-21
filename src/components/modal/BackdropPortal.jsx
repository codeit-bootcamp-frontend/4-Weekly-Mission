import { createPortal } from "react-dom"

function BackdropPortal(component) {
  return createPortal(component, document.getElementById("modal"))
}

export default BackdropPortal
