import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

function ModalPortal({ children }: { children: ReactNode }) {
  const modalRoot = document.getElementById('modal') as HTMLElement

  return createPortal(children, modalRoot)
}

export default ModalPortal
