import { ReactNode } from "react"
import styled from "styled-components"


interface ParagraphProps {
  children: ReactNode
}

export default function Paragraph({ children }: ParagraphProps) {
  return <Text>{children}</Text>
}

const Text = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: var(--gray2);
  margin: 8px 0 24px 0;
`