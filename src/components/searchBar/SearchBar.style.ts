import styled from "styled-components"

export const Search = styled.div`
  margin: 40px auto;
  height: 54px;
  position: relative;

  @media (max-width: 769px) {
    margin: 20px auto 32px;
    height: 54px;
    position: relative;
  }

  .input {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 15px 15px 15px 42px;
    line-height: 24px;

    &::placeholder {
      color: #666666;
    }
  }
`

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
`

export const Cancel = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`
