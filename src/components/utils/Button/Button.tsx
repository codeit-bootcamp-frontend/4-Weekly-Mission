/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react'
import '../../../styles/common.css'
interface ButtonProps {
  name: string
  size: string
  isLoading: boolean
  css?: SerializedStyles
}
const Button = ({ name, size, isLoading }: ButtonProps) => {
  return (
    <button
      type="submit"
      css={isLoading ? hideBtnCss : showBtnCss}
      className={`CTA ${size}`}
    >
      {name}
    </button>
  )
}

export default Button

const hideBtnCss = css`
  display: none;
`

const showBtnCss = css`
  display: block;
`
