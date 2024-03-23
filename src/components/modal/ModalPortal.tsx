import { ReactNode } from "react"
import { createPortal } from "react-dom"

function ModalPortal(component: ReactNode) {
  return createPortal(component, document.getElementById("modal") as HTMLDivElement)
}

export default ModalPortal
