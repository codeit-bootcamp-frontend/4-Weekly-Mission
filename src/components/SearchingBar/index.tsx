/** @jsxImportSource @emotion/react */
import styles from './styles'
import searchImg from 'assets/Search.png'
import '../../styles/common.css'
import { ChangeEvent, useEffect, useState } from 'react'
//{ onSearch } 프롭으로 넣기
const SearchingBar = ({
  keyword,
  handleChange,
}: {
  keyword: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <form css={styles.form}>
      <img src={searchImg} css={styles.image} />
      <input
        type="search"
        value={keyword}
        onChange={handleChange}
        placeholder="링크를 검색해 보세요"
        css={styles.input}
      />
    </form>
  )
}

export default SearchingBar
