import styled from "styled-components"

export const Features = styled.ul`
  display: flex;
  gap: 0 12px;
  margin-top: 12px;
`

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--gray2);

  img {
    width: 18px;
    height: 18px;
  }

  span {
    display: block;
    margin-left: 4px;
  }
`
