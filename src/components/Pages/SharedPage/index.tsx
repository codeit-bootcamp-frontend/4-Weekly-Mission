/** @jsxImportSource @emotion/react */
import { useState, ChangeEvent } from 'react'
import Layout from '../../Layout/index'
import Profile from './Profile/index'
import SearchingBar from '../../SearchingBar/index'
import Cards from '../../Cards/index'
import useGetCardInShared from '../../../hooks/useGetCardsInShared'
import { divCss } from './styles'
import toLowerCase from 'utils/toLowerCase'

const SharedPage = () => {
  const { cardDetail } = useGetCardInShared()
  const [keyword, setKeyword] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(toLowerCase(e.target.value))
  }
  return (
    <Layout
      children={[
        <Profile />,
        <div css={divCss}>
          <SearchingBar keyword={keyword} handleChange={handleChange} />,
          <Cards items={cardDetail} />
        </div>,
      ]}
    />
  )
}
export default SharedPage
