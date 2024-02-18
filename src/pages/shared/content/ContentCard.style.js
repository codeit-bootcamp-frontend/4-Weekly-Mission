import styled from 'styled-components';

export const CardContainer = styled.div`
  width: calc(33.33% - 20px);
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  /* tablet */
  @media all and (max-width: 1124px) {
    width: calc(50% - 20px);
  }
  /* mobile */

  @media all and (min-width: 375px) and (max-width: 767px) {
    width: 100%;
  }
  .image-wrapper {
    overflow: hidden;
    & img {
      height: 200px;
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  .text-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 20px;
  }
  .time-ago {
    color: #666;
    font-size: 1.3rem;
  }
  .desc {
    height: 49px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.6rem;
    line-height: 24px;
  }
  .date {
    height: 19px;
    color: #333;
    font-size: 1.4rem;
  }
`;
