import styled from "styled-components"

export const Image = styled.div`
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;
`

export const BackgroundImage = styled.img`
  transition: 0.6s;
  transition-timing-function: cubic-bezier(0.09, 0.54, 0.32, 0.96);
`

export const ArticleList = styled.li`
  width: 100%;
  height: 335px;

  &:hover ${BackgroundImage} {
    transform: scale(1.3);
  }
`

export const Contents = styled.div`
  padding: 15px 20px;
  height: 135px;
  position: relative;
`
export const ElapsedTime = styled.span`
  color: var(--gray6);
  font-size: 13px;
`

export const Description = styled.p`
  margin: 10px 0;
  line-height: 24px;
  max-height: 49px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const Date = styled.span`
  font-size: 14px;
  color: #333;
`

export const Kebab = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
`

export const Star = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`
