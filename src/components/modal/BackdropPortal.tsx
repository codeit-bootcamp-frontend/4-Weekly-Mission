import { ReactNode } from "react"
import { createPortal } from "react-dom"

function BackdropPortal(component: ReactNode) {
  return createPortal(component, document.getElementById("modal") as HTMLDivElement)
}

export default BackdropPortal
