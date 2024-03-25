/** @jsxImportSource @emotion/react */
import { background, modal } from './styles'
import { Fragment, ReactNode } from 'react'
import {
  ModalProps,
  CloseButtonProps,
  HeaderProps,
  Children,
  ButtonProps,
} from 'index.types'
const Modal = ({ children, isOpen }: ModalProps): JSX.Element => {
  return (
    <>
      {isOpen ? (
        <div css={background}>
          <LayOut>{children}</LayOut>
        </div>
      ) : null}
    </>
  )
}

const LayOut = ({ children }: Children) => {
  return <div css={modal}>{children}</div>
}

const CloseButton = ({ children, handleClick }: CloseButtonProps) => {
  return <button onClick={handleClick}>{children}</button>
}

const Title = ({ children }: { children: string }) => {
  return <h1>{children}</h1>
}

const Description = ({ children }: { children: string }) => {
  return <p>{children}</p>
}

const Header = ({ Title, Description }: HeaderProps) => {
  return (
    <div>
      {Title}
      {Description}
    </div>
  )
}

const Body = ({ children }: { children: ReactNode[] }) => {
  return (
    <div>
      {children?.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </div>
  )
}

const Button = ({ children, handleClick }: ButtonProps) => {
  return <>{children && <button onClick={handleClick}>{children}</button>}</>
}

Modal.Title = Title
Modal.Description = Description
Modal.Header = Header
Modal.Body = Body
Modal.Button = Button
Modal.CloseButton = CloseButton

export default Modal
