/** @jsxImportSource @emotion/react */
import { useState, ChangeEvent } from 'react'
import toLowerCase
 from 'utils/toLowerCase'
import { MouseEvent } from 'react'
import Layout from '../../Layout'
import AddLink from './AddLink/index'
import NavButton from './NavButton'
import Cards from '../../Cards'
import SearchingBar from '../../SearchingBar/index'
import useGetButttonList from '../../../hooks/useGetButtonList'
import useGetCardsInFolder from '../../../hooks/useGetCardsInFolder'
import '../../../styles/common.css'
import {
  divCss,
  btnCss,
  outerDivCss,
  visible,
  unVisible,
  fixedLinkCssDefault,
} from './styles'
import useObserver from 'hooks/useObserver'

const FolderPage = () => {
  const [clickedButtonId, setClickedButtonId] = useState<number | null>(null)
  const { buttonsId, buttonsTitle } = useGetButttonList()
  const { isOver, HeaderRef } = useObserver()
  const [keyword, setKeyword] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(toLowerCase(e.target.value))
  }
  const { cardDetail } = useGetCardsInFolder({ clickedButtonId, keyword })
  const topLinkCss = isOver ? unVisible : visible
  const fixedLinkCss = isOver ? visible : unVisible
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    setClickedButtonId(Number(target.id))
  }

  return (
    <Layout
      children={[
        <div ref={HeaderRef} css={topLinkCss}>
          <AddLink />
        </div>,
        <div css={divCss}>
          <SearchingBar keyword={keyword} handleChange={handleChange} />
          <div css={btnCss}>
            {buttonsTitle.map((button, index) => (
              <NavButton
                title={button}
                key={buttonsId[index]}
                id={buttonsId[index]}
                onClick={(e) => handleClick(e)}
              />
            ))}
          </div>
        </div>,
        <div css={outerDivCss}>
          <Cards items={cardDetail} />
        </div>,
        <div css={[fixedLinkCss, fixedLinkCssDefault]}>
          <AddLink />
        </div>,
      ]}
    />
  )
}

export default FolderPage
