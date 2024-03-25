import { ReactNode } from 'react'
import styled from 'styled-components'

interface TitleProps {
  children: ReactNode
}

export default function Title({ children }: TitleProps) {
  return <ModalTitle>{children}</ModalTitle>
}


export const ModalTitle = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: var(--black);
`