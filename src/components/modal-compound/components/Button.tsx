import { ReactNode } from "react"
import styled, { css } from 'styled-components'

enum BackgroundColor {
  GRADIENT = "GRADIENT",
  RED = "RED"
}

type BackgroundColorType = keyof typeof BackgroundColor

interface ButtonProps {
  children: ReactNode
  $backgroundColor: BackgroundColorType
}

export default function Button({ children, $backgroundColor }: ButtonProps) {
  return <ModalButton $backgroundColor={$backgroundColor}>{children}</ModalButton>
}

const gradientBackground = css`
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`

const redBackground = css`
  background: var(--red);
`


const ButtonStyles = {
  GRADIENT: gradientBackground,
  RED: redBackground,
}

const ModalButton = styled.button<{ $backgroundColor: BackgroundColorType }>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  color: var(--white);

  ${({ $backgroundColor }) => ButtonStyles[$backgroundColor]}
`
