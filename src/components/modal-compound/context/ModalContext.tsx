import { ChangeEvent, createContext, Fragment, InputHTMLAttributes, ReactNode } from "react"
import * as S from "./ModalContext.style"
import * as ModalComponents from "../components"
import Backdrop from "components/modal-compound/backdrop/Backdrop"
import { createPortal } from "react-dom"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

interface CategoriesProps {
  data?: any
  selectedItem?: string | null
  onSelectedItem?: (id: string) => void
}

interface ModalContextProps extends InputProps, CategoriesProps {
  onCloseModal: () => void
  categoryName?: string
  categoryData?: any
}

export const ModalContext = createContext<ModalContextProps>({
  onCloseModal: () => {},
})

interface ModalProps {
  children: ReactNode
  value: ModalContextProps
}

export function Modal({ children, value }: ModalProps) {
  const modalElement = document.getElementById("modal-root")! as HTMLDivElement
  const backdropElement = document.getElementById("backdrop-root")! as HTMLDivElement
  return (
    <Fragment>
      {createPortal(<Backdrop onCloseModal={value.onCloseModal} />, backdropElement)}
      {createPortal(
        <ModalContext.Provider value={value}>
          <S.Modal>
            <S.ModalLayout>{children}</S.ModalLayout>
          </S.Modal>
        </ModalContext.Provider>,
        modalElement
      )}
    </Fragment>
  )
}

Modal.Button = ModalComponents.Button
Modal.Input = ModalComponents.Input
Modal.Title = ModalComponents.Title
Modal.Exit = ModalComponents.Exit
Modal.Paragraph = ModalComponents.Paragraph
Modal.Share = ModalComponents.Share
Modal.Categories = ModalComponents.Categories
