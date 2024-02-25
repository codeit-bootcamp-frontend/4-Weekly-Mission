import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 15px;
  width: calc(33.33% - 13.3px);
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: background 0.5s ease;
  &:hover {
    background: var(--background, #f0f6ff);
  }
  &:hover .image-wrapper .folder-img {
    transform: scale(1.3);
  }

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
    position: relative;

    .folder-img {
      height: 200px;
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
      transition: transform 0.3s ease;
    }

    .star-icon {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .text-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 20px;
  }

  .time-ago-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .time-ago {
    color: #666;
    font-size: 1.3rem;
  }

  .kebob-icon {
    position: relative;
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

export const PopOver = styled.div`
  width: 100px;
  position: absolute;
  top: 50;
  left: 0;
  flex-direction: column;
  gap: 2px;
  background: var(--white, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  & button {
    padding: 7px 12px;
    color: #333236;
    font-size: 14px;
    &:hover {
      color: var(--primary, #6d6afe);
      background: var(--gray10, #e7effb);
    }
  }
`;
