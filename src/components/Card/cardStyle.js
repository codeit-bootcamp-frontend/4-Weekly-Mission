import styled, { css } from 'styled-components';

const commonTextStyle = css`
  margin: 0.7rem 0.9rem;
  font-style: normal;
  font-weight: 400;
`;

export const CardGrid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;
  margin: auto;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const CardLinkList = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 0.5rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
`;

export const CardLinkImage = styled.img`
  width: 100%;
  height: 15rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  object-fit: cover;
`;

export const CardLinkImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
`;

export const StarIconContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const CardLinkContent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardLinkTimeago = styled.time`
  color: #666;
  font-size: 0.8rem;
`;

export const CardLinkDescription = styled.p`
  ${commonTextStyle}
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
`;

export const CardLinkDatestring = styled.time`
  ${commonTextStyle}
  font-size: 0.8rem;
  align-self: flex-start;
  margin-top: auto;
`;

export const CardLinkInfoContainer = styled.div`
  ${commonTextStyle}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
