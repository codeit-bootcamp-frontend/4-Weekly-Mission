/** @jsxImportSource @emotion/react */
import '../../../../styles/reset.css'
import '../../../../styles/common.css'
import {
  divCss,
  imgCss,
  inputCss,
  formCss,
  btnWrapper,
} from './styles'
import linkImg from '../../../../assets/link.png'
import Button from '../../../utils/Button/Button'

const AddLink = () => {

  return (
    <div css={divCss}>
      <form css={formCss}>
        <img src={linkImg} css={imgCss} />
        <input css={inputCss} placeholder="링크를 추가해 보세요"></input>
        <div css={btnWrapper}>
          <Button name="추가하기" size="input small" isLoading={false} />
        </div>
      </form>
    </div>
  )
}
export default AddLink
