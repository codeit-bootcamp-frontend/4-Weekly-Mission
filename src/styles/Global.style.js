import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { Colors } from "./Colors.style"
import { MyReset } from "./MyReset.style"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${Colors}
  ${MyReset}
`

export default GlobalStyle
