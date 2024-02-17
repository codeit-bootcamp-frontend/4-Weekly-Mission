import styled from "styled-components"

export const Features = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const Categories = styled.ul`
  display: flex;
  gap: 0 8px;
`

export const AddFolder = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--primary);

  img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
`
